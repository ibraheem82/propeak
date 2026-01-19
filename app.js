
import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import indexRouter from './src/routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true  // Disable caching to pick up template changes
});

// Enable Compression
app.use(compression());

// Serve static files with caching
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d', // Cache for 1 day
    etag: false
}));
app.use(cookieParser());

// Language Middleware
app.use((req, res, next) => {
    // Check if lang query param is present
    if (req.query.lang && ['en', 'pl'].includes(req.query.lang)) {
        res.cookie('lang', req.query.lang, { maxAge: 900000, httpOnly: true });
        req.lang = req.query.lang;
    } else {
        // Fallback to cookie or default to 'en'
        req.lang = req.cookies.lang || 'en';
    }

//     req.lang: Stores the language for use in your backend logic (e.g., querying the correct database translation).

// res.locals.lang: Magically passes this variable to your views/templates (Nunjucks).

// This means in your HTML file, you can just write {{ lang }} or {% if lang == 'pl' %} without having to manually pass the variable in every single res.render call.

    // Make lang available to templates
    res.locals.lang = req.lang;
    next();
});

// Use routes
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

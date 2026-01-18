
import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
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

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
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
    // Make lang available to templates
    res.locals.lang = req.lang;
    next();
});

// Use routes
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

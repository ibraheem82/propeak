
import { content } from '../models/contentModel.js';

export const getHome = (req, res) => {
    const lang = req.lang || 'en'; // Default to 'en' if undefined
    const localizedContent = content[lang];
    res.render('index.njk', localizedContent);
};

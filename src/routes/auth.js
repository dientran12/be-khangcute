import express from 'express';

const router = express.Router();

router.get('/sign-up', (req, res) => {
    res.send('oke')
})


export default router
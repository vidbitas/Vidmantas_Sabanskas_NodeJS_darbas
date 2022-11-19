export const isAuth = (req, res, next) => {
  if (req.session.myname) {
    res.json({ messagesss: 'Jus autentifikuotas', error: false });
    next();
  }

  return res.json({
    message: 'Jus neautentifikuotas',
    error: true,
  });
};

export const getToken = (req, res, next) => {

	if (req.headers.authorization) {
		req.token = req.headers.authorization
	} else {
		req.token = `Bearer ${req.session.user.token}`
	}

	next()
}

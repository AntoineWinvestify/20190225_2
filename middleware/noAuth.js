export default function ({ store, redirect, error }) {
	if (store.state.authUser) {
		return redirect(`/${store.state.locale}/dashboard`)
	}
}

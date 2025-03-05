function Email ({ formInput, handleChange}) {
    return (
        <>
            <label htmlFor="email" id="emailLabel">
                Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                title="email"
                value={formInput.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                aria-required
                autoComplete
                autoCorrect
            />
        </>
    )
}

export default Email;
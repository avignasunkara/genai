from config import MODEL_CONFIG


def estimate_cost(model, tokens=500):
    return MODEL_CONFIG[model]["cost"] * tokens
        if st.button("Register", use_container_width=True):
            users = load_users()

            if new_user.strip() == "":
                st.error("Username cannot be empty")
            elif new_user in users["username"].values:
                st.error("Username already exists")
            elif len(new_pass) < 4:
                st.error("Password must be at least 4 characters")
            elif new_pass != confirm:
                st.error("Passwords do not match")
            else:
                save_user(new_user, new_pass)
                st.success("🎉 Registration successful. Please login.")
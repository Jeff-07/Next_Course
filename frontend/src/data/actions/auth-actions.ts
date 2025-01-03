"use server"

export async function registerUserAction(prevState: any, formData: FormData) {
    console.log("Hello from Register User Action");

    const fields = {
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email"),
    };

    console.log("#############");
    console.log(fields);
    console.log("#############");

    return {
        ...prevState,
        data: fields,
    };
}
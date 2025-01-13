"use server"

import qs from "qs";

import { mutateData } from "../services/mutate-data";
import { revalidatePath } from "next/cache";

export async function updateProfileAction(
    userId: string,
    prevState: any,
    formData: FormData
) {
    const rawFormData = Object.fromEntries(formData);
    console.log(rawFormData);

    const query = qs.stringify({
        populate: "*",
    })

    const payload = {
        firstName: rawFormData.firstName,
        lastName: rawFormData.lastName,
        bio: rawFormData.bio,
    };

    const responseData = await mutateData(
        "PUT",
        `/api/users/${userId}?${query}`,
        payload
    );

    //checking for data updating errors
    if (!responseData) {
        return {
            ...prevState,
            strapiErros: null,
            message: "Ops! Something went wrong. Please try again.",
        }
    }

    if (responseData.error){
        return {
            ...prevState,
            strapiErros: responseData.error,
            message: "Failed to Update Profile",
        }
    }

    console.log("updateProfileAction", userId);
    console.log("################################");
    console.log(payload);
    console.log("################################")

    revalidatePath("/dashboard/account");

    return {
        ...prevState,
        message: "Profile Updated",
        data: responseData,
        strapiErrors: null,
    }
}
import apiRoutes from "../constant/ApiRoutes.js";

const createForm = document.getElementById("createForm");

createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const slug = document.getElementById("slug").value;
    const published_date = document.getElementById("published_date").value;
    const file = document.getElementById("image").files[0];
    const content = document.getElementById("content").value;
    console.log(title, slug, author, file, published_date, content);

    let formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("author", author);
    formData.append("published_date", published_date);
    formData.append("content", content);
    formData.append("file", file);
    console.log(formData);

    createNewBlog(formData);
});

const createNewBlog = async(formData) => {
    try {
        const response = await fetch(apiRoutes.news, formData,{
            method: "POST",
            headers: {
                "Content-Type" : "multipart/form-data" 
            },
        });
        if(response.status === 200) {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
};
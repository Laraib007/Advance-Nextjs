import styles from "@/styles/About.module.css";

export default function About(){
    return(
        <>
        <div className={styles.container}>
            <h1>About Hunting Coder</h1>
            <h2>Introduction</h2>
            <p>As discussed, we know that HTTP errors must be handled by using the response object properties Response.ok and Response.status. Response.ok is a Boolean value that lets us know if the response was successful or not, whereas Response.status represents the HTTP status codes, such as 200 for success and 404 if the resource is not found. Have a look at the following response object:</p>
            <h2>Services Offered</h2>
            <p>As discussed, we know that HTTP errors must be handled by using the response object properties Response.ok and Response.status. Response.ok is a Boolean value that lets us know if the response was successful or not, whereas Response.status represents the HTTP status codes, such as 200 for success and 404 if the resource is not found. Have a look at the following response object:</p>
            <p>What Services we offer?</p>
            <ul>
                <li>Service 1</li>
                <li>Service 1</li>
                <li>Service 1</li>
                <li>Service 1</li>
                <li>Service 1</li>
            </ul>
        </div>
        </>
    )
}
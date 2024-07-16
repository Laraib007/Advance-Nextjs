export default function Blog (){
    return(
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
  
        </Head>
        <div><div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="name" className="form-control" name="name" id="name" placeholder="Enter Your Name"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" name="email" id="email" placeholder="Enter Your Email"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="phone" className="form-control" name="phone" id="phone" placeholder="Enter Your Phone Number"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" type="desc" id="desc" name="desc" rows="3"/>
      </div></div>
      </>
    )
}
import React from "react";
import "./Book.css";

function Books(){
    return(
        <div className="b-example-divider">
    <div className="container">
      <div id="flip" className="row">
        <div className="col-4">
          <h3>Donate Books</h3>
          <br/>
        </div>
      </div>
      <form id="panel" className="row g-3 border border-black">
        <div className="col-md-5">
          <label for="validationDefault01" className="form-label">Name of the Book</label>
          <input type="text" className="form-control" id="validationDefault01" required/>
        </div>
        <div className="col-md-3">
          <label for="validationDefaultUsername" className="form-label">Cellphone</label>
          <div className="input-group">
            <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationDefault03" className="form-label">Genre</label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Choose...</option>
            <option>Fiction</option>
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Dystopian</option>
            <option>Action & Adventure</option>
            <option>Mystery</option>
            <option>Horror</option>
            <option>Thriller & Suspense</option>
            <option>Historical Fiction</option>
            <option>Romance</option>
            <option>Women's Fiction</option>
            <option>LGBTQ+</option>
            <option>Contemporary Fiction</option>
            <option>Literary Fiction</option>
            <option>Magical Realism</option>
            <option>Graphic Novel</option>
            <option>Short Story</option>
            <option>Young Adult</option>
            <option>New Adult</option>
            <option>Children's</option>
            <option>Nonfiction</option>
            <option>Memoir & Autobiography</option>
            <option>Biography</option>
            <option>Food & Drink</option>
            <option>Art & Photography</option>
            <option>Self-help</option>
            <option>History</option>
            <option>Travel</option>
            <option>True Crime</option>
            <option>Humor</option>
            <option>Essays</option>
            <option>Guide</option>
            <option>Religion & Spirituality</option>
            <option>Humanities & Social Science</option>
            <option>Parenting & Families</option>
            <option>Science & Technology</option>
            <option>Children's</option>
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefault04" className="form-label">Reading Level</label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Choose...</option>
            <option>A - 4</option>
            <option>6 - 16</option>
            <option>18 - 24</option>
            <option>28 - 38</option>
            <option>40 - 50</option>
            <option>60 - 80</option>
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefault05" className="form-label">Subject</label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Choose...</option>
            <option>Arts</option>
            <option>Animals</option>
            <option>Fiction</option>
            <option>Science and math</option>
            <option>Business</option>
            <option>Child</option>
            <option>History</option>
            <option>Health and wellness</option>
            <option>Biographys</option>
            <option>Social Science</option>
            <option>Places</option>
            <option>Text books</option>
          </select>
        </div>
        <div className="col-md-5">
          <label for="validationDefaultUsername" className="form-label">Image of the Book</label>
          <input type="file" className="form-control" aria-label="file example" required/>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
            <label className="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit information</button>
        </div>
      </form>
      <div className="row">
        <div className="col-4">
          <h3>Books needed</h3>
        </div>
        <div className="card mb-3">
          <img src="data:image/jpg;base64,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" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Genghis Khan and the beggining of the modern world</h5>
            <p className="card-text">In 1937, during Stalin's persecutions, the soul of Genghis Khan vanished from the Buddhist monastery in Mongolia where it had been safeguarded for centuries. The intent was to erase even the memory of someone who was regarded as a bloody tyrant.</p>
          </div>
        </div>
        <div className="card mb-3">
          <img src="data:image/jpg;base64,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" className="card-img-top" alt="..."/> 
          <div className="card-body">
            <h5 className="card-title">Where the Wild Things Are</h5>
            <p className="card-text">This high-quality Spanish-language book can be enjoyed by fluent Spanish speakers as well as those learning the language, whether at home or in a classroom.</p>
          </div>
        </div>
      </div>
      
    </div>
    </div>

    );

}
export default Books;
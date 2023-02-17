import './formstyle.css';

function Form() {
  return (
    <div id="division1">
      <div id="division2"><h1>Cross Skilling Registration Form</h1></div>
      <div id="division3">
        <form>
          <table cellspacing="10px" >
            <p><i>
              Hi Resource,when you submit this form you will be a part of cross
              skilling training..</i>
            </p>
            <tr>
              <td>1. Your Name</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  id="textbox"
                  placeholder="Enter Your Answer"
                />
              </td>
            </tr>
            <tr>
              <td>2. UID</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="uid"
                  id="textbox"
                  placeholder="Enter Your Answer"
                />
              </td>
            </tr>
            <tr>
              <td>3. Date of Birth</td>
            </tr>
            <tr>
              <td>
                <input
                  type="date"
                  name="dob"
                  id="textbox"
                  placeholder="Enter Your Answer"
                />
              </td>
            </tr>
            <tr>
              <td>4. Designation</td>
            </tr>
            <tr>
              <td>
                <select name="designation" id="textbox">
                  <option>Select your designation</option>
                  <option>Developer I</option>
                  <option>Developer II</option>
                  <option>Developer III</option>
                  <option>Lead I</option>
                  <option>Lead II</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>5. Select the course you are interested to learn</td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="course" value="React JS" id="radio" />React JS
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="course" value="Big Data" id="radio" />Big Data
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="course" value="Data Analytics" id="radio" />Data
                Analytics
              </td>
            </tr>
            <tr>
              <td>6. Select Previous Technology</td>
            </tr>
            <tr>
              <td><input type="checkbox" name="tech1" value="Java" id="radio" />Java</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="tech2" value="Python" id="radio" />Python
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" name="tech3" value="SQL" id="radio"/>SQL</td>
            </tr>
            <tr>
              <td>7. Why your interested in this training</td>
            </tr>
            <tr>
              <td><textarea rows="5" cols="50" ></textarea></td>
            </tr>                            
          </table>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;


document.getElementById('userForm').addEventListener('submit', function(e){
    // close refresh page of website
    e.preventDefault();
    var fullname = document.getElementById('fullname').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var salary = document.getElementById('salary').value;
    var dob = document.getElementById('dob').value;
    var position = document.getElementById('position').value;
    var description = document.getElementById('description').value;
    var currency = Number(salary).toLocaleString("en-US",
        {stylele : "currency",
                currency: "USD",
        }
    );
    document.getElementById("result").innerHTML = `
    <div class="alert alert-success">
    <button onclick="closeResult()" class="btn-close" type="button" style="margin-left:360px;" data-bs-dismiss="alert" aria-label="Close"></button>

    <h4 class="text-primary" >Submit result information!</h4>
    
    <p class="fs-6"><strong>Gender     :</strong>${gender}</P>
    <p class="fs-6"><strong>SALARY    :</strong>$${currency}</P>
    <p class="fs-6"><strong>Fullname  :</strong>${fullname}</P>
    <p class="fs-6"><strong>Date of birth:</strong>${dob}</P>
    <p class="fs-6"><strong>Position:</strong>${position}</P>
    <p class="fs-6"><strong>Description:</strong>${description}</P>
    
    
    </div>
    `;
});
function closeResult(){
    document.getElementById("result").innerHTML = "";
}







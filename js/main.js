(() => {

    // make AJAX request using the Fetch API
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let profNameSlot = document.querySelector(".profNameSlot"),
            classTimeSlot = document.querySelector(".list-inline"),
            courseDescSlot = document.querySelector(".courseDescSlot"),
            courseNameSlot = document.querySelector(".courseNameSlot"),
            courseNameSlot2 = document.querySelector(".text-primary");

        profNameSlot.textContent = "Professor - " + data.profname;
        classTimeSlot.textContent = data.classtime;
        courseDescSlot.textContent = data.coursedesc;
        courseNameSlot.textContent = data.coursename + " | " + data.coursecode;
        courseNameSlot2.textContent = data.coursename + " | " + data.coursecode;
        


        // handleData
        // here's where you would call the function that puts the pieces on the page
    })
    .catch((err) => {
        console.log(err);
    })


})();
function demoAlertInternal()
        {
            alert("Internal Alert")
        }
        function demoConfirmInternal()
        {
            if(confirm("Are you sure...?"))
            {
                alert("YES...!")
            }
            else
            {
                alert("NO...!")
            }
        }
        function demoPromptInternal()
        {
            var fName = prompt("Enter First Name....")
            var lName = prompt("Enter Last Name....")
            alert(fName+" "+lName)
        }
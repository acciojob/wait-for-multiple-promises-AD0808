//your JS code here. If required.
        document.getElementById("voteForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            
            let name = document.getElementById("name").value.trim();
            let age = document.getElementById("age").value.trim();
            
            if (name === "" || age === "") {
                alert("Please enter valid details.");
                return;
            }
            
            age = parseInt(age);
            
            let votingPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000); // 4-second delay
            });
            
            votingPromise
                .then(message => alert(message))
                .catch(error => alert(error));
        });

function getNumberInfo() {
    const number = document.getElementById("numberInput").value;
    
    // If the input is empty, do not proceed
    if (!number) {
        alert("Please enter a phone number.");
        return;
    }

    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://fam-official.serv00.net/sim/api.php?num=${number}`)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const info = JSON.parse(data.contents);

            // Check if the API returns valid data
            if (info.data && info.data.length > 0) {
                // Display the result section
                document.getElementById("result").classList.remove("hidden");

                // Fill the result fields with the data
                document.getElementById("ownerName").innerText = "Owner: " + info.data[0].Name;
                document.getElementById("cnic").innerText = "CNIC: " + info.data[0].CNIC;
                document.getElementById("mobile").innerText = "Mobile: " + info.data[0].Mobile;
                document.getElementById("operator").innerText = "Operator: " + info.data[0].Operator;
                document.getElementById("address").innerText = "Address: " + info.data[0].Address;
            } else {
                alert("No data found for this number.");
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert("An error occurred. Please try again later.");
        });
}

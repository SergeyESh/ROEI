var selectedFile;
document
    .getElementById("fileUpload")
    .addEventListener("change", function(event) {
        selectedFile = event.target.files[0];
    });
document
    .getElementById("uploadExcel")
    .addEventListener("click", function() {
        if (selectedFile) {
            var fileReader = new FileReader();
            fileReader.onload = function(event) {
                var data = event.target.result;
    
                var workbook = XLSX.read(data, {
                    type: "binary"
                });
                workbook.SheetNames.forEach(sheet => {
                    const rowObject = XLSX.utils.sheet_to_row_object_array(
                        workbook.Sheets[sheet]
                    );
                    const jsonObject = JSON.stringify(rowObject, null, 2);
                    document.getElementById("jsonData").innerHTML = jsonObject;
                    // console.log(jsonObject);
                });
            };
            fileReader.readAsBinaryString(selectedFile);
        }
    });
          
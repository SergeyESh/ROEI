var selectedFile;


//----------------------------------------------------------------------------------------
//Функции для загрузки файла, его конвертации в JSON

function uploadFile(event){
    selectedFile = event.target.files[0];
};

function convertFile() {
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
                var jsonObject = JSON.stringify(rowObject, null, 2).replace(/ /g,'');
                document.getElementById("jsonData").innerHTML = jsonObject;
            });
        };
        fileReader.readAsBinaryString(selectedFile);
    }
};

function deleteFile() {
    jsonObject.value = '';
};

function openRoei() {
    var link = document.createElement("a")
    link.href = "http://10.250.74.17/roei/verification-measuring-instruments"
    link.target = "_blank"
    link.click()
  }


//----------------------------------------------------------------------------------------
//Выбор элементов на странице и применение функций

document
    .getElementById("fileUpload")
    .addEventListener("change", uploadFile);

document
    .getElementById("uploadExcel")
    .addEventListener("click", convertFile);

document
    .getElementById("deleteFile")
    .addEventListener("click", deleteFile);

//----------------------------------------------------------------------------------------
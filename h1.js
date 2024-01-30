
        function fileValidation() {
            var fileInput = 
                document.getElementById('formFile');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions = /(\.xlsx|\.xml|\.csv|\.xltx|\.xlsb|\.xlsm|\.xls)$/i;
             
            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid File Type or Select Valid File');
                fileInput.value = '';
                document.getElementById("msg").innerHTML=("Select valid file")
                return false;
            }
            else{
                alert('Successfully Uploaded');
                document.getElementById("msg").innerHTML=("Success")
            }
        }
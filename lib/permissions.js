// verify to see if the user owns the document they are working on

ownsDocument = function (userId, doc) {
	return doc && doc.userId === userId;
};

// =========================
        encodeImageFileAsURL = function (){

            var filesSelected = document.getElementById("fileInput").files;
            if (filesSelected.length > 0)
            {
                var fileToLoad = filesSelected[0];

                var fileReader = new FileReader();

                fileReader.onload = function(fileLoadedEvent) {
                    var srcData = fileLoadedEvent.target.result; // <--- data: base64

                    // var newImage = document.createElement('img');
                    // newImage.src = srcData;

                    // document.getElementById("imgTest").innerHTML = newImage.outerHTML;
                    // alert("Converted Base64 version is "+document.getElementById("imgTest").innerHTML);
                    // console.log(srcData);
                    $('#preview').attr('src', srcData);
                    return srcData;
                };
                fileReader.readAsDataURL(fileToLoad);

            }
        };
        // =========================

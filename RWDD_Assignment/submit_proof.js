document .getELementById('photo').addEventListner9('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('photo-preview');
    const uploadBox = document.querySelector('.upload-box');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = ew.target.result;
            preview.style.display = 'block';
            uploadBox.style.padding = "10px";
            uploadBox.querySelector('.icon-circle').style.display = 'none';
            uploadBox.querySelector('strong').textContent = "Change Photo";
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = 'none';
    }
})
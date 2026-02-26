const photoInput = document.getElementById('photo');
const preview = document.getElementById('preview');
const uploadBox = document.getElementById('uploadBox');

photoInput.addEventListener('change', function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {

        preview.src = e.target.result;
        preview.style.display = 'block';

        // add class to change UI
        uploadBox.classList.add('has-image');
    };

    reader.readAsDataURL(file);
});
<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        document.getElementById('confirmationMessage').style.display = 'block'; // Show the confirmation message
    });
</script>
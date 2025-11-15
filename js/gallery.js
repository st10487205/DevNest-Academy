// Lightbox functionality
        let currentImageIndex = 0;
        const images = [
            { src: 'images/graduate.jpg', caption: 'Ecstatic Graduate' },
            { src: 'images/front-end-buddies.jpg', caption: 'Front-End Buddies' },
            { src: 'images/GroupOfGraduates.jpg', caption: 'Group of Graduates' },

            { src: 'images/same-town-friends.jpg', caption: 'Hometown friends' },
            { src: 'images/back-end-buddies.jpg', caption: 'Back-end Buddies' },
            { src: 'images/a-students.jpg', caption: 'A-students' },

            { src: 'images/graduates.jpeg', caption: 'Graduates' },
            { src: 'images/genius.jpeg', caption: 'Genius' },
            { src: 'images/female-graduate.jpg', caption: 'Female graduate' }
            
        ];
        
        function openLightbox(src, caption) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            
            // Find the index of the clicked image
            currentImageIndex = images.findIndex(img => img.src === src);
            
            lightboxImg.src = src;
            lightboxCaption.textContent = caption;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        function changeImage(direction) {
            currentImageIndex += direction;
            
            // Wrap around if at beginning or end
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            } else if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            
            lightboxImg.src = images[currentImageIndex].src;
            lightboxCaption.textContent = images[currentImageIndex].caption;
        }
        
        // Close lightbox when clicking outside the image
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target === document.getElementById('lightbox')) {
                closeLightbox();
            }
        });
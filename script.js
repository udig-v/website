document.addEventListener("mousemove", (event) => {
  // Select all pupils
  const pupils = document.querySelectorAll(".pupil");
  const blackEyes = document.querySelectorAll(".black-eye");

  // Update standard pupils
  pupils.forEach((pupil) => {
    const eye = pupil.closest(".eye");
    const eyeRect = eye.getBoundingClientRect();

    // Calculate the angle to move the pupil
    const angle = Math.atan2(
      event.clientY - (eyeRect.top + eyeRect.height / 2),
      event.clientX - (eyeRect.left + eyeRect.width / 2)
    );

    const distance = 4; // distance the pupil should move
    pupil.style.transform = `translate(-50%, -50%) translate(${
      Math.cos(angle) * distance
    }px, ${Math.sin(angle) * distance}px)`;
  });

  // Update oval-horizontal eyes
  blackEyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Use event.clientX and event.clientY for mouse coordinates
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const distance = Math.min(rect.width / 4, 10); // Control max pupil movement

    eye.style.transform = `translate(${Math.cos(angle) * distance}px, ${
      Math.sin(angle) * distance
    }px)`;
  });
});

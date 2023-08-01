// Definir el diccionario con los datos para estilos
const datos = {
    nombreInstructor: "Juan Pablo Nardone",
    emailInstructor: "juanpablo.nardone@bue.edu.ar",
    linkedinInstructor: "https://www.linkedin.com/in/juan-pablo-nardone/",
    numeroComision: "23530",
    horariosComision: "Clases los Martes y Jueves de 14:00 a 15:30 hs (puntual).",
    enlaceMeet: "https://meet.google.com/pud-kaqm-xno",
    enlaceYouTube: "https://www.youtube.com/playlist?list=PLcVi00zZjeQNsPOi8EntwlRKchHy-020t",
    enlacePresentismo: "https://docs.google.com/forms/d/e/1FAIpQLSe1m9k3Dy955ItPHuAXTDMc3ezNTeYHAtM841FANUWK6EwspA/viewform?usp=sf_link",
    nombreTutor: "Isabela Dominguez",
    enlaceTutor: "https://docs.google.com/forms/d/e/1FAIpQLSeY7KWCwqTtLIVzp6apaziI1zaIoftHKX-H6Ig4qseQnrriDQ/viewform",
    guiaEstudiante: "https://drive.google.com/file/d/1TMmXDoyVlfo50xVlbp5kjhwfnILqCT0S/view",
    enlaceDrive: "https://drive.google.com/drive/folders/1NM2xLT4yysdgyCuzPcC8-7OcyA6sGfWg",
    enlacePlanEstudios: "https://drive.google.com/file/d/1X41mYqahAAXPgsl79wifmdTbkfowg1fw/view",
    enlaceEncuesta: "https://docs.google.com/forms/d/e/1FAIpQLSevAoeVM6SrYC_cdsVh_Y5Log_3CTZniYfvSTibZje9XETLUw/viewform"
};

document.addEventListener('DOMContentLoaded', function () {
    // Instructor
    document.getElementById('nombreInstructor').textContent = datos.nombreInstructor;
    document.getElementById('emailInstructor').href = 'mailto:' + datos.emailInstructor;
    document.getElementById('emailInstructor').textContent = datos.emailInstructor;
    document.getElementById('linkedinInstructor').href = datos.linkedinInstructor;

    // Comisión, días y horarios
    document.getElementById('numeroComision').textContent = datos.numeroComision;
    document.getElementById('horariosComision').textContent = datos.horariosComision;

    // Meet
    document.getElementById('enlaceMeet').href = datos.enlaceMeet;

    // YouTube
    document.getElementById('enlaceYouTube').href = datos.enlaceYouTube;

    // Presentismo
    document.getElementById('enlacePresentismo').href = datos.enlacePresentismo;

    // Tutor/a
    document.getElementById('nombreTutor').textContent = datos.nombreTutor;
    document.getElementById('enlaceTutor').href = datos.enlaceTutor;
    document.getElementById('guiaEstudiante').href = datos.guiaEstudiante;

    // Drive
    document.getElementById('enlaceDrive').href = datos.enlaceDrive;

    // Plan de estudios
    document.getElementById('enlacePlanEstudios').href = datos.enlacePlanEstudios;

    // Encuesta diagnóstica
    document.getElementById('enlaceEncuesta').href = datos.enlaceEncuesta;
});
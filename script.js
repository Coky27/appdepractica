document.addEventListener('DOMContentLoaded', function() {
    const teams = [
        { name: 'Equipo A', goals: 5, wins: 2 },
        { name: 'Equipo B', goals: 7, wins: 3 },
        { name: 'Equipo C', goals: 4, wins: 1 },
        { name: 'Equipo D', goals: 6, wins: 4 }
    ];

    const teamTableBody = document.getElementById('teamTableBody');

    // Generar filas de la tabla con los datos de los equipos
    teams.forEach(team => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team.name}</td>
            <td>${team.goals}</td>
            <td>${team.wins}</td>
        `;
        teamTableBody.appendChild(row);
    });
});

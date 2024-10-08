function calculatePercentage(marks) {
    const total = marks.reduce((acc, mark) => acc + mark, 0);
    return (total / (marks.length * 100)) * 100;
}

function findGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
}

function scholarshipDiscount(percentage) {
    if (percentage >= 85) return '20%';
    if (percentage >= 75) return '15%';
    if (percentage >= 65) return '10%';
    return '0%';
}

function generateMarksheet() {
    const name = prompt("Enter your name:");
    const marks = [];

    for (let i = 1; i <= 5; i++) {
        let mark;
        do {
            mark = parseInt(prompt(`Enter marks for Subject ${i} (out of 100):`), 10);
        } while (isNaN(mark) || mark < 0 || mark > 100);
        marks.push(mark);
    }

    const percentage = calculatePercentage(marks);
    const grade = findGrade(percentage);
    const discount = scholarshipDiscount(percentage);

    const marksheetDiv = document.getElementById('marksheet');
    marksheetDiv.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = `Marksheet for ${name}`;
    marksheetDiv.appendChild(heading);

    const table = document.createElement('table');
    
    const headerRow = document.createElement('tr');
    ['Subject', 'Marks'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    marks.forEach((mark, index) => {
        const row = document.createElement('tr');
        const subjectCell = document.createElement('td');
        subjectCell.textContent = `Subject ${index + 1}`;
        const markCell = document.createElement('td');
        markCell.textContent = mark;
        row.appendChild(subjectCell);
        row.appendChild(markCell);
        table.appendChild(row);
    });

    const summaryRow = document.createElement('tr');
    summaryRow.innerHTML = `<td><strong>Total Percentage</strong></td><td>${percentage.toFixed(2)}%</td>`;
    table.appendChild(summaryRow);

    const gradeRow = document.createElement('tr');
    gradeRow.innerHTML = `<td><strong>Grade</strong></td><td>${grade}</td>`;
    table.appendChild(gradeRow);

    const discountRow = document.createElement('tr');
    discountRow.innerHTML = `<td><strong>Scholarship Discount</strong></td><td>${discount}</td>`;
    table.appendChild(discountRow);

    marksheetDiv.appendChild(table);
}

window.onload = generateMarksheet;

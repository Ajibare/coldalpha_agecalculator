document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    // Validate inputs
    if (!isValidDate(day, month, year)) {
        document.getElementById('ageDisplay').textContent = 'Please enter a valid date!';
        return;
    }
    
    // Calculate age
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    // Adjust months and days if needed
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Format the result
    const ageString = `Years: ${years}, Months: ${months}, Days: ${days}`;
    document.getElementById('ageDisplay').textContent = ageString;
});

// Helper function to validate date
function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && 
           date.getMonth() === month - 1 && 
           date.getDate() === day;
}

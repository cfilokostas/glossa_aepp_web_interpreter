// Program Commands
const programCommands = [
    "ΠΡΟΓΡΑΜΜΑ", "ΣΤΑΘΕΡΕΣ", "ΜΕΤΑΒΛΗΤΕΣ", "ΑΚΕΡΑΙΕΣ:", "ΠΡΑΓΜΑΤΙΚΕΣ:", 
    "ΧΑΡΑΚΤΗΡΕΣ:", "ΛΟΓΙΚΕΣ:", "ΑΡΧΗ", "ΓΡΑΨΕ", "ΔΙΑΒΑΣΕ", "ΑΝ ΤΟΤΕ", 
    "ΑΛΛΙΩΣ_ΑΝ ΤΟΤΕ", "ΑΛΛΙΩΣ", "ΤΕΛΟΣ_ΑΝ", "ΓΙΑ ΑΠΟ ΜΕΧΡΙ ΜΕ_ΒΗΜΑ",
    "ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ", "ΟΣΟ ΕΠΑΝΑΛΑΒΕ", "ΜΕΧΡΙΣ_ΟΤΟΥ", "ΚΑΛΕΣΕ", 
    "ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ", "ΔΙΑΔΙΚΑΣΙΑ", "ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ", "ΣΥΝΑΡΤΗΣΗ:ΑΚΕΡΑΙΑ", 
    ":ΠΡΑΓΜΑΤΙΚΗ", ":ΧΑΡΑΚΤΗΡΑΣ", ":ΛΟΓΙΚΗ", "ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ", "Α_ΜΟ Α_ΤΟ ΕΟ ΕΦΟ",
    "ΗΜΟ ΛΟΓ ΤΟ ΣΥΝΟ Τ_ΡΟ", "ΑΛΗΘΗΣ ΨΕΥΔΗΣ", "= < > <= >=", "- + / * ^ div mod",
    "Η ΚΑΙ ΟΧΙ <-"
];

// Algorithm Commands
const algorithmCommands = [
    "Αλγόριθμος", "Δεδομένα // //", "Εμφάνισε", "Εκτύπωσε", "Διάβασε", 
    "Αντιμετάθεσε", "Αν τότε", "αλλιώς_αν τότε", "αλλιώς", "Τέλος_αν", 
    "Για από μέχρι με_βήμα", "Τέλος_επανάληψης", "Όσο επαναλάβε", 
    "Τέλος_επανάληψης", "Αρχή_επανάληψης", "Μέχρις_ότου", "Αποτελέσματα // //", 
    "Τέλος", "Α_Μ() Α_Τ() Ε() ΕΦ()", "ΗΜ() ΛΟΓ() ΣΥΝ() Τ_Ρ()", "Αληθής Ψευδής",
    "= <> < > <= >=", "- + / * ^ div mod", "ή και όχι <-"
];

// Correction mappings for both types
const programCorrections = {

    //Εκτύπωσε
    "εκτυπωσε": "Εκτύπωσε",
    "εκτύπωσε": "Εκτύπωσε",
    "Εκτυπωσε": "Εκτύπωσε",
    // Add more corrections specific to "Πρόγραμμα" here
};

const algorithmCorrections = {
    //Αλγόριθμος
    "αλγοριθμος": "Αλγόριθμος",
    "εκτύπωσε": "Εκτύπωσε",
    "εκτυπωσε": "Εκτύπωσε",
    "Εκτυπωσε": "Εκτύπωσε",
    // Add more corrections specific to "Αλγόριθμος" here
};

// Update commands based on selection
function updateCommands() {
    const typeSelect = document.getElementById('typeSelect').value;
    const commandsList = document.getElementById('commandsList');

    // Clear current commands
    commandsList.innerHTML = '';

    // Select correct command set
    const commands = (typeSelect === 'program') ? programCommands : algorithmCommands;

    // Add commands to the list
    commands.forEach(command => {
        const li = document.createElement('li');
        
        // Split command into words
        const words = command.split(' ');

        // Create span for each word
        words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word;

            // Add click listener to insert word at cursor
            span.onclick = () => insertAtCursor(word);

            // Optional styling for clickable word
            span.style.cursor = 'pointer';
            span.style.color = 'blue';
            span.style.marginRight = '5px';

            // Append span to list item
            li.appendChild(span);
        });

        // Append list item to commands list
        commandsList.appendChild(li);
    });
}

// Insert command at the cursor position in the textarea
function insertAtCursor(word) {
    const textarea = document.getElementById('code');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const textBefore = textarea.value.substring(0, startPos);
    const textAfter = textarea.value.substring(endPos, textarea.value.length);

    // Insert the word at cursor position
    textarea.value = textBefore + word + textAfter;

    // Move the cursor after the inserted word
    textarea.selectionStart = textarea.selectionEnd = startPos + word.length;

    // Focus back on the textarea
    textarea.focus();

    // Sync highlighting and line numbers
    syncHighlight();
    updateLineNumbers();
}

// Highlight the current line where the cursor is
function highlightLine() {
    const textarea = document.getElementById('code');
    const highlight = document.getElementById('highlight');
    const lines = textarea.value.split('\n');

    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    const currentLine = textBeforeCursor.split('\n').length - 1;

    highlight.innerHTML = '';
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('current-line');
    lineDiv.style.top = `${currentLine * 1.2}em`;
    highlight.appendChild(lineDiv);
}

// Sync scrolling between textarea and highlight
function syncScroll() {
    const textarea = document.getElementById('code');
    const highlight = document.getElementById('highlight');
    highlight.scrollTop = textarea.scrollTop;
}

// Update line numbers in the textarea
function updateLineNumbers() {
    const textarea = document.getElementById('code');
    const lineNumbers = document.getElementById('lineNumbers');
    const lineCount = textarea.value.split('\n').length;

    lineNumbers.innerHTML = Array(lineCount).fill(0).map((_, i) => i + 1).join('<br>');
}

// Synchronize textarea content with the highlight div
function syncHighlight() {
    updateLineNumbers();
    // You could add additional synchronization here if needed
}

// Auto-correct feature
function autoCorrect() {
    const textarea = document.getElementById('code');
    const cursorPosition = textarea.selectionStart; // Get current cursor position
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    
    // Check which line the cursor is on
    const lines = textBeforeCursor.split('\n');
    const currentLine = lines[lines.length - 1]; // Get the current line
    const lastWordStart = currentLine.lastIndexOf(' ') + 1; // Get the start of the last word
    const lastWord = currentLine.substring(lastWordStart).toLowerCase(); // Convert to lowercase for matching

    // Determine the corrections to use based on the selected type
    const typeSelect = document.getElementById('typeSelect').value;
    const corrections = (typeSelect === 'program') ? programCorrections : algorithmCorrections;

    // Check for corrections
    const correctWord = corrections[lastWord];
    if (correctWord) {
        // Replace last word with the correct version
        const correctedText = textarea.value.substring(0, cursorPosition - currentLine.length + lastWordStart) + 
                              correctWord + 
                              textarea.value.substring(cursorPosition);
        textarea.value = correctedText;

        // Restore cursor position
        textarea.selectionStart = textarea.selectionEnd = cursorPosition - currentLine.length + lastWordStart + correctWord.length; // Move cursor to the end of the corrected word
    }
}

// Listen for input changes
document.getElementById('code').addEventListener('input', () => {
    autoCorrect();
});

// Initialize commands on page load
window.onload = updateCommands;


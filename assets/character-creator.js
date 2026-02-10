// Character Creator for Into the Barrowlands

let generatedMarkdown = '';
let selectedAlignment = '';
let selectedBonds = [];
let gearChoices = {};

// Update HP calculation when class or CON changes
document.getElementById('classSelect').addEventListener('change', function() {
    updateHP();
    updateAlignments();
    updateBonds();
    updateGear();
});

document.getElementById('con').addEventListener('change', updateHP);

function updateHP() {
    const classSelect = document.getElementById('classSelect').value;
    const conValue = document.getElementById('con').value;
    
    if (classSelect && conValue && CLASS_DATA[classSelect]) {
        const classData = CLASS_DATA[classSelect];
        const conMod = parseInt(conValue);
        const totalHP = classData.hp + conMod;
        document.getElementById('hpResult').innerHTML = `<strong>${classData.hp} + ${conValue} = ${totalHP} HP</strong>`;
    }
}

function updateAlignments() {
    const classSelect = document.getElementById('classSelect').value;
    const alignmentDiv = document.getElementById('alignmentOptions');
    
    if (!classSelect || !CLASS_DATA[classSelect]) {
        alignmentDiv.innerHTML = '<p><em>Select a class to see alignment options.</em></p>';
        return;
    }
    
    const classData = CLASS_DATA[classSelect];
    const alignments = classData.alignments;
    
    let html = '<div class="checkbox-group">';
    for (const [alignment, description] of Object.entries(alignments)) {
        html += `
            <label>
                <input type="radio" name="alignment" value="${alignment}" onchange="setAlignment('${alignment}')">
                <strong>${alignment}:</strong> ${description}
            </label>
        `;
    }
    html += '</div>';
    
    alignmentDiv.innerHTML = html;
}

function setAlignment(alignment) {
    selectedAlignment = alignment;
}

function updateBonds() {
    const classSelect = document.getElementById('classSelect').value;
    const bondsDiv = document.getElementById('bondsOptions');
    
    if (!classSelect || !CLASS_DATA[classSelect]) {
        bondsDiv.innerHTML = '<p><em>Select a class to see bond options.</em></p>';
        return;
    }
    
    const classData = CLASS_DATA[classSelect];
    const bonds = classData.bonds;
    
    let html = '';
    bonds.forEach((bond, index) => {
        html += `
            <label>
                <input type="checkbox" name="bond${index}" value="${bond}" onchange="updateSelectedBonds()">
                ${bond}
            </label>
        `;
    });
    
    bondsDiv.innerHTML = html;
}

function updateSelectedBonds() {
    selectedBonds = [];
    const checkboxes = document.querySelectorAll('#bondsOptions input[type="checkbox"]:checked');
    checkboxes.forEach(cb => {
        selectedBonds.push(cb.value);
    });
}

function parseGearText(gearText) {
    const lines = gearText.split('\n');
    const parsed = {
        fixedItems: [],
        choiceSections: []
    };
    
    let currentSection = null;
    
    for (let line of lines) {
        line = line.trim();
        if (!line || line === '---') continue;
        
        // Collect sentences that start with "You carry", "You start with", etc. as fixed items
        if (line.match(/^You (carry|start with|begin with)/i)) {
            parsed.fixedItems.push(line);
            currentSection = null;
            continue;
        }
        
        // Check for choice sections
        if (line.match(/^Choose (your|one|an?)/i)) {
            currentSection = {
                title: line.replace(':', ''),
                options: []
            };
            parsed.choiceSections.push(currentSection);
            continue;
        }
        
        // Parse items (lines starting with -)
        if (line.startsWith('-')) {
            const item = line.substring(1).trim();
            if (currentSection) {
                currentSection.options.push(item);
            }
        }
    }
    
    return parsed;
}

function updateGear() {
    console.log('updateGear called');
    const classSelect = document.getElementById('classSelect').value;
    console.log('Selected class:', classSelect);
    const gearDiv = document.getElementById('gearOptions');
    console.log('Gear div found:', gearDiv !== null);
    
    if (!classSelect || !CLASS_DATA[classSelect]) {
        console.log('No class selected or CLASS_DATA missing');
        gearDiv.innerHTML = '<p><em>Select a class to see gear options.</em></p>';
        return;
    }
    
    console.log('CLASS_DATA found for class');
    
    const classData = CLASS_DATA[classSelect];
    const gearText = classData.gear;
    console.log('Gear text length:', gearText.length);
    const parsed = parseGearText(gearText);
    console.log('Parsed gear:', parsed);
    
    gearChoices = {}; // Reset gear choices
    
    let html = '';
    
    // Show fixed items
    if (parsed.fixedItems.length > 0) {
        html += '<div class="gear-section"><h3>You Start With:</h3>';
        parsed.fixedItems.forEach(item => {
            // Remove markdown formatting for display
            const cleanItem = item.replace(/\*\*/g, '').replace(/\*/g, '');
            html += `<p>${cleanItem}</p>`;
        });
        html += '</div>';
    }
    
    // Show choice sections with radio buttons
    parsed.choiceSections.forEach((section, sectionIdx) => {
        html += `<div class="gear-section"><h3>${section.title}</h3><div class="checkbox-group">`;
        section.options.forEach((option, optionIdx) => {
            const radioName = `gear_section_${sectionIdx}`;
            html += `
                <label>
                    <input type="radio" name="${radioName}" value="${option}" onchange="updateGearChoice(${sectionIdx}, '${option.replace(/'/g, "\\'")}')">
                    ${option}
                </label>
            `;
        });
        html += '</div></div>';
    });
    
    console.log('Setting gear HTML, length:', html.length);
    gearDiv.innerHTML = html;
    console.log('Gear HTML set successfully');
}

function updateGearChoice(sectionIndex, choice) {
    gearChoices[sectionIndex] = choice;
}

function buildGearList() {
    const classSelect = document.getElementById('classSelect').value;
    const classData = CLASS_DATA[classSelect];
    const gearText = classData.gear;
    const parsed = parseGearText(gearText);
    
    let gearList = [];
    
    // Add all fixed items (clean up the sentences into item format)
    parsed.fixedItems.forEach(sentence => {
        // Remove markdown and extract just the gear descriptions
        const cleaned = sentence.replace(/\*\*/g, '').replace(/\*/g, '');
        // Remove "You carry the " or "You start with " prefix
        const withoutPrefix = cleaned.replace(/^You (carry the |start with |begin with )/i, '');
        gearList.push(withoutPrefix);
    });
    
    // Add selected choices
    for (let i = 0; i < parsed.choiceSections.length; i++) {
        if (gearChoices[i]) {
            gearList.push(gearChoices[i]);
        }
    }
    
    return gearList.join('\n- ');
}

function generateCharacterSheet() {
    // Validate form
    const form = document.getElementById('characterForm');
    if (!form.checkValidity()) {
        alert('Please fill in all required fields.');
        form.reportValidity();
        return;
    }
    
    // Validate stat assignment
    const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'].map(s => document.getElementById(s).value);
    const statCount = {'+2': 0, '+1': 0, '0': 0, '-1': 0};
    stats.forEach(s => statCount[s]++);
    
    if (statCount['+2'] !== 1 || statCount['+1'] !== 2 || statCount['0'] !== 2 || statCount['-1'] !== 1) {
        alert('Stats must be assigned as: one +2, two +1, two 0, one -1');
        return;
    }
    
    // Check alignment selected
    if (!selectedAlignment) {
        alert('Please select an alignment.');
        return;
    }
    
    // Check at least one bond selected
    if (selectedBonds.length === 0) {
        alert('Please select at least one bond.');
        return;
    }
    
    // Check gear choices made
    const classSelect = document.getElementById('classSelect').value;
    const classData = CLASS_DATA[classSelect];
    const parsed = parseGearText(classData.gear);
    
    for (let i = 0; i < parsed.choiceSections.length; i++) {
        if (!gearChoices[i]) {
            alert(`Please make a selection for: ${parsed.choiceSections[i].title}`);
            return;
        }
    }
    
    // Gather data
    const charName = document.getElementById('charName').value;
    const look = document.getElementById('look').value;
    const notes = document.getElementById('notes').value;
    
    const str = document.getElementById('str').value;
    const dex = document.getElementById('dex').value;
    const con = document.getElementById('con').value;
    const int = document.getElementById('int').value;
    const wis = document.getElementById('wis').value;
    const cha = document.getElementById('cha').value;
    
    const conMod = parseInt(con);
    const totalHP = classData.hp + conMod;
    const strMod = parseInt(str);
    const totalLoad = classData.load.replace('STR', strMod.toString());

    // Build gear list
    const gearList = buildGearList();
    
    // Generate markdown
    const classTitle = classData.name;
    
    // Build starting moves section
    let startingMovesText = '';
    classData.starting_moves.forEach(move => {
        startingMovesText += `- ${move}\n`;
    });
    
    // Build advanced moves sections
    let advancedMoves2_5 = '';
    classData.advanced_2_5.forEach(move => {
        advancedMoves2_5 += `- [ ] ${move}\n`;
    });
    
    let advancedMoves6_10 = '';
    classData.advanced_6_10.forEach(move => {
        advancedMoves6_10 += `- [ ] ${move}\n`;
    });
    
    // Build bonds text
    let bondsText = '';
    selectedBonds.forEach(bond => {
        bondsText += `${bond}\n\n`;
    });
    
    generatedMarkdown = `# ${charName}
**Class:** ${classTitle}  
**Campaign:** Into the Barrowlands

---

## Stats

**STR** ${str} | **DEX** ${dex} | **CON** ${con}  
**INT** ${int} | **WIS** ${wis} | **CHA** ${cha}

**HP:** ${totalHP} / ${totalHP}  
**Damage:** ${classData.damage}  
**Load:** ${totalLoad}  
**Armor:** 0

**XP:** [ ] [ ] [ ] [ ] [ ] [ ] [ ]

---

## Look

${look}

---

## Alignment

**${selectedAlignment}**

*${classData.alignments[selectedAlignment]}*

---

## Bonds

${bondsText.trim()}

---

## Starting Gear

- ${gearList}

---

## Starting Moves

${startingMovesText}

*Consult your class page for full move descriptions.*

---

## Advanced Moves (2-5)

When you gain a level from 2-5, choose from these moves:

${advancedMoves2_5}

---

## Advanced Moves (6-10)

When you gain a level from 6-10, choose from these moves (or level 2-5 moves):

${advancedMoves6_10}

---

## Notes

${notes || '*No additional notes.*'}

---

*Character created: ${new Date().toISOString().split('T')[0]}*
`;

    // Display output
    document.getElementById('output-preview').textContent = generatedMarkdown;
    document.getElementById('outputSection').classList.remove('hidden');
    
    // Scroll to output
    document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth' });
}

function downloadCharacterSheet() {
    const charName = document.getElementById('charName').value.replace(/\s+/g, '-').toLowerCase();
    const filename = `${charName}-character-sheet.md`;
    
    const blob = new Blob([generatedMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function copyToClipboard() {
    navigator.clipboard.writeText(generatedMarkdown).then(() => {
        alert('Character sheet copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy to clipboard. Please select and copy manually.');
    });
}

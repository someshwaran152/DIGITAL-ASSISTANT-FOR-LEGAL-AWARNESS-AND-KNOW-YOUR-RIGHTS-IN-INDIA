const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('userInput');

function sendMessage() {
    const userMessage = userInput.value;
    displayMessage(userMessage, 'user');
    // Process user message (e.g., generate a response)
    const botResponse = generateBotResponse(userMessage);
    displayMessage(botResponse, 'bot');
    // Save user message and bot response to the database (backend required)
    // Example: send data to a server using fetch or AJAX
    userInput.value = ''; // Clear input field
}

function displayMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = text;
    messagesContainer.appendChild(messageElement);
}

function generateBotResponse(userMessage) {
    if(userMessage=='hi'){
    return 'hello admin';
    }
    else if (userMessage=='Criminal law') {
        return 'Criminal law is the body of law that relates to crime. It prescribes conduct perceived as threatening, harmful, or otherwise endangering to the property, health, safety, and welfare of people inclusive of one s self. Most criminal law is established by statute, which is to say that the laws are enacted by a legislature. Criminal law includes the punishment and rehabilitation of people who violate such'
        'Criminal law varies according to jurisdiction, and differs from civil law, where emphasis is more on dispute resolution and victim compensation, rather than on punishment or rehabilitation';
    } else if(userMessage=='civil law'){
        return 'Civil law, originating from continental Europe and rooted in Roman law principles, focuses on codified laws covering contracts, property, family law, and torts. Unlike common law systems, civil law relies on statutes and codes enacted by legislators rather than judicial precedent. It provides a systematic framework for resolving disputes, emphasizing the application of written laws to specific cases. Predominant in Europe, Latin America, Asia, and Africa, civil law aims to offer clarity and consistency in legal matters.'
    }else if(username=='property law'){
        return'Property law governs ownership, use, and transfer of real and personal property, including rights, leases, easements, zoning, and landlord-tenant relations. Its goal is to protect rights over land, buildings, and possessions, resolving disputes and interacting with contract, tort, and environmental law. Crucial for societal order, property law establishes clear ownership and usage responsibilities.'
    }else if(userMessage=='Employment law'){
        return 'Employment law governs the employer-employee relationship, addressing hiring, wages, working conditions, discrimination, harassment, termination, and workplace safety. It aims to safeguard workers rights, ensuring fairness. This body of law encompasses statutes, regulations, and court decisions, offering mechanisms for dispute resolution and ensuring adherence to labor standards Employment law is pivotal in fostering equality, fairness, and stability in the workforce.'
    }else if(userMessage=='Constitutional law '){
        return 'Constitutional law involves interpreting and applying a countrys constitution, covering governance structure, power distribution among branches, individual rights, and state-citizen relations. Judicial review is common, assessing laws, executive actions, and policies for constitutionality. It vital for upholding the rule of law, safeguarding rights, and maintaining power balance.'
    }else if(userMessage=='Environmental law'){
        return'Environmental law regulates and protects the natural environment and resources through statutes, regulations, and treaties. It aims to prevent harm, promote sustainability, and conserve ecosystems. Addressing pollution, waste, biodiversity, habitats, and climate change, it involves governments, businesses, communities, and NGOs. Ultimately, environmental law seeks to balance economic growth with ecological preservation for present and future generations.'
    }else if(userMessage=='what is law'){
        return 'Law is a system of rules established by authorities to regulate behavior in society, defining rights, responsibilities, and consequences for violations. Enforced at various government levels, it covers areas like criminal justice, civil rights, contracts, and environmental issues. Laws core functions include maintaining order, promoting justice, protecting rights, and upholding societal values.';
    }
        
    
        return 'hhh'
    }


    


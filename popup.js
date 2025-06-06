document.addEventListener('DOMContentLoaded', function() {
    // Sample prompt data for demonstration; replace this with your actual data retrieval logic
    const prompts = [
        {name: 'Prompt 1', message: 'Description or content of Prompt 1'},
        {name: 'Prompt 2', message: 'Description or content of Prompt 2'}
        //... add more prompts as needed
    ];

    const promptContainer = document.getElementById('promptContainer');
    
    prompts.forEach(prompt => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        
        const promptName = document.createElement('span');
        promptName.className = 'name';
        promptName.innerText = prompt.name;
        
        const promptMessage = document.createElement('span');
        promptMessage.className = 'message';
        promptMessage.innerText = prompt.message;
        
        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        emoji.innerText = '😀';  // You can adjust this to any emoji or icon you'd like
        
        const arrow = document.createElement('span');
        arrow.className = 'arrow';
        arrow.innerText = '>';
        
        listItem.appendChild(promptName);
        listItem.appendChild(promptMessage);
        listItem.appendChild(emoji);
        listItem.appendChild(arrow);
        
        promptContainer.appendChild(listItem);
    });

    // Event handler for adding a new prompt
    document.getElementById('addPrompt').addEventListener('click', function() {
      // Code to add a new prompt
    });
  
    // Event handler for organizing prompts into folders
    document.getElementById('organizePrompt').addEventListener('click', function() {
      // Code to organize prompts into folders or categories
    });
  
    // Event handler for search and filter
    document.getElementById('searchInput').addEventListener('keyup', function() {
      // Code for search and filter functionality
    });
  
    // Event handler for exporting prompts
    document.getElementById('exportPrompts').addEventListener('click', function() {
      // Code to export prompts
    });
  
    // Event handler for importing prompts
    document.getElementById('importPrompts').addEventListener('click', function() {
      // Code to import prompts
    });
});
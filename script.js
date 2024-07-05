function generateReadme() {
    const name = document.getElementById('name').value;
    const Profile = document.getElementById('Profile').value;
    const currentlyWorking = document.getElementById('currentlyWorking').value;
    const projectName = document.getElementById('projectName').value;
    const projectLink = document.getElementById('projectLink').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const instagram = document.getElementById('instagram').value;
    const hackerrank = document.getElementById('hackerrank').value;
    const leetcode = document.getElementById('leetcode').value;
    const geeksforgeeks = document.getElementById('geeksforgeeks').value;
    const currentlyLearning = document.getElementById('currentlyLearning').value;
    const built = document.getElementById('built').value;
    const freeTime = document.getElementById('freeTime').value;
    const contact = document.getElementById('contact').value;
    const favorites = document.getElementById('favorites').value;

    const readmeContent = `
# Hi 👋, I'm ${name}

# ${Profile}

## Connect with me:
<p>
   <a href="${linkedin}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/linked-in.png" alt="LinkedIn" height="30" width="40" /></a>
   <a href="${github}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/github.png" alt="GitHub" height="30" width="40" /></a>
   <a href="${geeksforgeeks}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/geeks-for-geeks.png" alt="GeeksforGeeks" height="30" width="40" /></a>
   <a href="${hackerrank}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/hackerrank.png" alt="Hackerrank" height="30" width="40" /></a>
   <a href="${leetcode}" target="_blank"><img align="center" src="icons/leetcode.png" alt="LeetCode" height="30" width="40" /></a>
   <a href="${instagram}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/instagram.png" alt="Instagram" height="30" width="40" /></a>
</p>

## 🗣 Talking about Personal Stuffs:
- 🔭 I’m currently working on: ${currentlyWorking}
- 🏗 &nbsp; Building: ${built}
- 🚀 &nbsp; I’m currently learning: ${currentlyLearning}
- 👨🏻‍💻 &nbsp; Most of my projects are available on: [${projectName}](${projectLink})
- 👨‍💻 &nbsp; Free time activities: ${freeTime}
- 📫 &nbsp; How to reach me: ${contact}

## My Absolute Favorites:
${favorites}
`;

    document.getElementById('generatedReadme').value = readmeContent.trim();
}

function copyReadme() {
    const readmeContent = document.getElementById('generatedReadme');
    readmeContent.select();
    document.execCommand('copy');
    alert('README content copied to clipboard!');
}

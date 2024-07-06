function generateReadme() {
    const name = document.getElementById('name').value;
    const profile = document.getElementById('profile').value;
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
    const readmeContent = `

<p align="center">
<img src="https://readme-typing-svg.herokuapp.com?color=E22FE4&width=380&height=28&lines=Hi👋+I'm+${name}..;Open-Source+Enthusiast..;Learning+In+Public..;Nice+To+Meet+You+....&center=true"></a></p>

${profile}

## Connect with me:
<p>
<a href="${linkedin}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/linked-in.png" alt="LinkedIn" height="30" width="40" /></a>
<a href="${github}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/github.png" alt="GitHub" height="30" width="40" /></a>
<a href="${geeksforgeeks}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/geeks-for-geeks.png" alt="GeeksforGeeks" height="30" width="40" /></a>
<a href="${hackerrank}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/hackerrank.png" alt="Hackerrank" height="30" width="40" /></a>
<a href="${leetcode}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/leet-code.png" height="30" width="40" /></a>
<a href="${instagram}" target="_blank"><img align="center" src="https://github.com/Mirnalkishor/GitHub-Profile-README-Generator/blob/main/icons/instagram.png" alt="Instagram" height="30" width="40" /></a>
</p>

## 🗣 Talking about Personal Stuffs:  <img align=right src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/about_me.gif?raw=true" alt="About Me GIF" width="250px"><br/>
- 🔭 I’m currently working on: ${currentlyWorking}
- 🏗 &nbsp; Building: ${built}
- 🚀 &nbsp; I’m currently learning: ${currentlyLearning}
- 👨🏻‍💻 &nbsp; Most of my projects are available on: [${projectName}](${projectLink})
- 👨‍💻 &nbsp; Free time activities: ${freeTime}
- 📫 &nbsp; How to reach me: ${contact}

## 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api/top-langs/?username=${name}&border=false&include_all_commits=true&count_private=true&layout=compact)
![](https://github-readme-stats.vercel.app/api?username=${name}&_border=false&include_all_commits=true&count_private=true)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=${name}&hide_border=false)

<p align=center>
Thank you for reading, Share your ❤️ And follow me for update🌟</p> 
`;

    document.getElementById('generatedReadme').value = readmeContent.trim();
}

function copyReadme() {
    const readmeContent = document.getElementById('generatedReadme');
    readmeContent.select();
    document.execCommand('copy');
    alert('README content copied to clipboard!');
}
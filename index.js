const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content.includes("-espinosex")) {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      if (message.content === "-espinosex jungla") {
        connection.play(
          ytdl("https://youtu.be/qgEbHaiGeZI", {
            filter: "audioonly",
          })
        );
      }
      if (message.content === "-espinosex paja") {
        connection.play(
          ytdl("https://www.youtube.com/watch?v=O-p6VocnXLg", {
            filter: "audioonly",
          })
        );
      }
      if (message.content === "-espinosex modo setzo") {
        connection.play(
          ytdl("https://www.youtube.com/watch?v=sKcjT2CRLkw", {
            filter: "audioonly",
          })
        );
      }
      if (message.content === "-espinosex freefire") {
        connection.play(
          ytdl("https://www.youtube.com/watch?v=Q-YoIHaecOs", {
            filter: "audioonly",
          })
        );
      }
      if (message.content === "-espinosex franchesco") {
        connection.play(
          ytdl("https://www.youtube.com/watch?v=iE3kD4X_Fwg", {
            filter: "audioonly",
          })
        );
      }
      if (message.content === "-espinosex franchesco covid") {
        connection.play(
          ytdl("https://www.youtube.com/watch?v=pkkgft9AoCk", {
            filter: "audioonly",
          })
        );
      }
      if (message.content === "-espinosex sho") {
        connection.disconnect();
      }
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }
});

client.on("message", async (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
  if (msg.content === "sho") {
    msg.reply("Sho vos culero!");
  }
  if (msg.content === "alv") {
    msg.reply("Que le gusta la verga dice!");
  }
  if (msg.content === "info") {
    msg.channel.send("Este grupo fue hecho para sacar la U si o si");
  }
  if (msg.content === "hello") {
    msg.channel.send(`Hello ${msg.author}!`);
  }
  if (msg.content.includes("!test")) {
    msg.channel.send(`Glad your are testing`);
  }
  if (msg.content.includes("-play")) {
    msg.channel.send(`-stop`);
  }
  if (msg.content === "!user") {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(
        "Yosoyfr",
        "https://anmosugoi.com/wp-content/uploads/2018/11/FISFORRESPECT.jpg"
      )
      .addField("Usuario", msg.author);
    msg.channel.send(embed);
  }
});

client.login("NzEzMDk1MzczNzAyNTYxODY0.XsbItw.1o9xWzjT0zA7Z4HlVo3D2ZBkNeE");

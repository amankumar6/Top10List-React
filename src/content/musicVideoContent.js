const source = [
    {
        title: "Baby Shark Dance",
        views: 9.51,
        content: `"Baby Shark" is a children's song featuring a family of sharks. Popular as a campfire song, it has taken off since 2016, when Pinkfong, a South Korean education company, turned it into a video that spread virally through social media, online video, and radio. Pinkfong's version has become the most-viewed video on YouTube of all time in November 2020 with over 9.51 billion views.`,
        src: "https://www.youtube.com/embed/XqZsoesa55w",
    },
    {
        title: "Despacito",
        views: 7.59,
        content: `If you take a look at Billboard’s Hot 100 Songs of 2017, you’ll find Despacito in the number two spot. It’s pretty clear that popular songs can also become highly watched YouTube videos. And with over 7.59 billion video views, it’s pretty clear why this is the most watched YouTube video. You have the music repeat factor where you watch it over again just to hear the song. And back in 2017 Spotify was popular, but not as popular as it is today. Despacito’s video has all the trademarks of a popular music video: dance sequences, good-looking people, palm trees, naturescapes, club scene, and of course the catchiest song to sing along to. The song is entirely in Spanish, making it one of the three on this top ten most viewed YouTube videos source that aren’t in English.`,
        src: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    },
    {
        title: "Shape of You",
        views: 5.49,
        content:
            "The second most viewed YouTube video is the Shape of You music video with over 5.49 billion video views. Another interesting tidbit is that it was actually the number one on Billboard’s Hot 100 Songs of 2017, beating out Despacito. Unlike most videos, where the singer sings in front of the camera, Shape of You is like a 4-minute movie telling the story of an athletic couple, and the song is just background music. The movie style music video isn’t too common, which makes it a compelling love story to watch. There are also some funny moments where Ed Sheeran and a sumo wrestler fight in the ultimate match. It also has a profound female empowerment message in it: Sheeran is a weakling compared to his love interest.",
        src: "https://www.youtube.com/embed/JGwWNGJdvx8",
    },
    {
        title: "See You Again",
        views: 5.3,
        content:
            "See You Again is the main song for the Fast and Furious 7 movie. One of the stars, Paul Walker, died in an infamous car crash shortly before its release. The song and music video are a tribute to Paul Walker and his journey in the Fast and Furious series. If you take a look at the video’s comments, you’ll see several notes about Paul Walker, suggesting that the video went viral because of his sudden death. The song in the video was also popular enough to earn a number three spot in the Billboard Hot 100 for 2015. The sad tone of the song and video make it worth watching over and over again. Emotions can play a big role in helping make a video go viral. Everyone can relate to the pain you feel from losing a loved one, which helps make this one of the most viewed YouTube videos of all time.",
        src: "https://www.youtube.com/embed/RgKAFK5djSk",
    },
    {
        title: "Uptown Funk",
        views: 4.33,
        content:
            "Uptown Funk was the number one song of 2015 on the Billboard Hot 100. According to Joe Bennett, a music professor at Bath Spa University, the song’s popularity is due to two key elements: a lack of a chorus and a slower tempo. These two elements make the song stand out. And as we’ve seen with other songs on this source, a number one hit makes it easier to score one of the most viewed YouTube videos. Another interesting tidbit is that Bruno Mars performed at the 2014 Super Bowl halftime show, which helped elevate his popularity and make his video more viral. The video itself has an old-school feel to it which makes it a unique watch that you don’t really see in music videos anymore.",
        src: "https://www.youtube.com/embed/OPf0YbXqDm0",
    },
    {
        title: "Gangnam Style",
        views: 4.22,
        content:
            "Gangnam Style was once the most viewed YouTube video of all time, as it was the first YouTube video to reach one billion views. The song is undeniably catchy, but the video shines with a level of quirkiness mainstream American media hadn’t seen before. The silly dance moves in unexpected places just makes this an all around fun video to watch. And let’s be honest, you’ve probably tried Psy’s dance moves yourself. The YouTube video has a carefree element which makes it easy to just allow yourself to be entertained while watching. With over 4.2 billion YouTube video views since it was published in July 2012, it’s pretty clear that Psy’s colorful personality is what helped make this video a raving success.",
        src: "https://www.youtube.com/embed/9bZkp7q19f0",
    },
    {
        title: "Sugar",
        views: 3.57,
        content: `"Sugar" is a song which is recorded by American band Maroon 5 for their fifth studio album V (2014). It was written by Mike Posner, Adam Levine, Dr. Luke, and Jacob Kasher Hindlin together with its producers Ammo and Cirkut. It was sent to contemporary hit radio in the United States, as the third single from the album on January 13, 2015. "Sugar" is a disco, funk-pop, and soul song that features a wide range of instruments including percussion, keyboards and guitars. Commercially, the song peaked at number two on the US Billboard Hot 100 and became the band's third top 10 single from V, and eighth consecutive top 10 entry. "Sugar" is the 68th song in history to score at least 20 weeks in the top 10 of the Hot 100.`,
        src: "https://www.youtube.com/embed/09R8_2nJtjg",
    },
    {
        title: "Sorry",
        views: 3.48,
        content:
            "Sorry, the sixth most watched Music video on YouTube, is quite a unique music video. Throughout the entire three minutes and 25 seconds, I waited… and waited… for Justin Bieber. It’s basically a Waiting for Godot music video because *spoiler alert* the Biebs just never shows up. Instead, the entire music video features an all-female dance crew in neon outfits and expressive faces. One of the non-song related reasons why this video might’ve been popular is because you can literally dance along with the simple moves. Some might’ve chosen to add this to a workout playsource on YouTube which can help elevate the number of views it gets. But aside from that, Justin Bieber currently has four music videos with over one billion YouTube views, so it’s likely that his 44.45 million YouTube subscribers help boost his videos’ viral success.",
        src: "https://www.youtube.com/embed/fRh_vgS2dFE",
    },
    {
        title: "Roar",
        views: 3.45,
        content:
            "Katy Perry is the first female on this source so far with her ever-catchy song and video for Roar. In the video, Perry is stranded in a jungle after a plane crash and is forced to survive on her own after her partner is eaten by a tiger. The comical video shows Perry constantly facing her fears, striving to survive, and taming animals while wearing scantily clad outfits. While Katy’s song was popular, landing at number 10 on the top 100 songs in 2013, her sizable fanbase of 33 million subscribers helped launch her view to a 2.8 billion view count. Plus, as with any lead single, it usually gets the biggest budget and most hype, which helps her land the most viewed YouTube video for a female artist.",
        src: "https://www.youtube.com/embed/CevxZvSJLk8",
    },
    {
        title: "Counting Stars",
        views: 3.42,
        content: `"Counting Stars" is a song by American pop rock band OneRepublic from their third studio album, Native (2013). The song was written by lead singer Ryan Tedder, and produced by Tedder and Noel Zancanella. It was released as the album's second single on June 14, 2013. The song has been one of the band's most successful singles, reaching number one in many countries including Canada and the United Kingdom, number two in the United States, and top ten in 20 countries. It has sold over 1 million copies in the United Kingdom.`,
        src: "https://www.youtube.com/embed/hT_nvWreIhg",
    },
];

export default source;


    versatile = [
    {
    "name": "uniform",
    "description": "Girls wearing any kind of uniform.",
    "is_nsfw": false,
    "tag_id": 11
    },
    {
    "name": "maid",
    "description": "Cute womans or girl employed to do domestic work in their working uniform.",
    "is_nsfw": false,
    "tag_id": 13
    },
    {
    "name": "waifu",
    "description": "A female anime/manga character.",
    "is_nsfw": false,
    "tag_id": 12
    },
    {
    "name": "marin-kitagawa",
    "description": "One of two main protagonists (alongside Wakana Gojo) in the anime and manga series My Dress-Up Darling.",
    "is_nsfw": false,
    "tag_id": 5
    },
    {
    "name": "mori-calliope",
    "description": "Mori Calliope is an English Virtual YouTuber (VTuber) associated with hololive as part of its first-generation English branch of Vtubers.",
    "is_nsfw": false,
    "tag_id": 14
    },
    {
    "name": "raiden-shogun",
    "description": "Genshin Impact's Raiden Shogun is a fierce lady in the Genshin ranks.",
    "is_nsfw": false,
    "tag_id": 15
    },
    {
    "name": "oppai",
    "description": "Girls with large breasts",
    "is_nsfw": false,
    "tag_id": 7
    },
    {
    "name": "selfies",
    "description": "A photo-like image of a waifu.",
    "is_nsfw": false,
    "tag_id": 10
    }
    ],
    nsfw = [
    {
    "name": "ass",
    "description": "Girls with a large butt. ",
    "is_nsfw": true,
    "tag_id": 1
    },
    {
    "name": "hentai",
    "description": "Explicit sexual content.",
    "is_nsfw": true,
    "tag_id": 4
    },
    {
    "name": "milf",
    "description": "A sexually attractive middle-aged woman.",
    "is_nsfw": true,
    "tag_id": 6
    },
    {
    "name": "oral",
    "description": "Oral sex content.",
    "is_nsfw": true,
    "tag_id": 8
    },
    {
    "name": "paizuri",
    "description": "A subcategory of hentai that involves breast sex, also known as titty fucking.",
    "is_nsfw": true,
    "tag_id": 9
    },
    {
    "name": "ecchi",
    "description": "Slightly explicit sexual content. Show full to partial nudity. Doesn't show any genital.",
    "is_nsfw": true,
    "tag_id": 2
    },
    {
    "name": "ero",
    "description": "Any kind of erotic content, basically any nsfw image.",
    "is_nsfw": true,
    "tag_id": 3
    }
    ]
    

    versatile.forEach(element => {console.log(element.name);
        let html = slect.innerHTML
        slect.innerHTML= html +`  <option value="${ element.name} ">${ element.name } </option> `
   });
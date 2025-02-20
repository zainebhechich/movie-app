// src/App.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Filter from './components/Filter';
import './App.css';
import AddMovie from './components/AddMovie';

const initialMovies = {
  Comedy: [
    {
      title: 'Superbad',
      description: 'Superbad (2007) is a coming-of-age teen comedy that follows high school seniors Seth and Evan, two socially awkward friends on a mission to make the most of their final days before graduation. Determined to experience one last wild night of parties and misadventures, they embark on a chaotic journey filled with awkward encounters, hilarious mishaps, and unexpected lessons about friendship and growing up. Directed by Greg Mottola and produced by Judd Apatow, this film blends crude humor with genuine heart, capturing the bittersweet transition from adolescence to adulthood.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevmmWW8yA76y27E2ue2RKmdZEkWZbpj6kNF9wjWBpcjrSjrsTc3FbIdIEYcNU-wt00T4&usqp=CAU',
      rating: 7.6,
      type: 'Comedy',
      trailerlink : 'https://www.youtube.com/embed/LvKvus3vCEY?si=2QZrZ7BxmWUA0YJ4'
    },
    {
      title: 'Bridesmaids',
      description: 'Bridesmaids (2011) is a raucous, laugh-out-loud comedy that follows the misadventures of Annie (Kristen Wiig), a woman whose life is in shambles as she’s unexpectedly named the maid of honor for her best friend Lillian’s wedding. As Annie navigates the chaotic world of bridal preparations, she finds herself caught in a fierce rivalry with a fellow bridesmaid, leading to a series of hilarious and awkward situations. The film masterfully blends crude humor with heartfelt moments, capturing the complexities of female friendships and the challenges of adult life, all set against the backdrop of wedding planning gone wildly off course.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykdh_4PMGBkwaFtX5V92xQjJdC8KeqODmLGNtDopGeroEHcarbY5w7Ca1mjuRyFX9i98&usqp=CAU',
      rating: 6.8,
      type: 'Comedy',
      trailerlink :'https://www.youtube.com/embed/FNppLrmdyug?si=E5FWbAFzsnCSVqe7'
    },
    {
      title: 'The Hangover',
      description: 'The Hangover is a 2009 American comedy film directed by Todd Phillips. The story follows a group of friends—Phil, Stu, and Alan—who travel to Las Vegas for a bachelor party. After a night of wild partying, they wake up with no memory of the previous night events and the groom-to-be missing. As they piece together clues from their chaotic night, they encounter a series of outrageous situations and eccentric characters, all while racing against time to find their friend before the wedding. The film is celebrated for its blend of humor, mystery, and unexpected twists, making it a standout hit in the comedy genre.',
      posterURL: 'https://play-lh.googleusercontent.com/3li3UAlq6UoInhvvF6BjmBU5BwmJaXxsJBS0p_ueFHoZZCTuofWA83dINBk_Ub8hCok',
      rating: 7.7,
      type: 'Comedy',
      trailerlink :'https://www.youtube.com/embed/tcdUhdOlz9M?si=E3J9ARGscpPMlBCu'
    },
    {
      title: 'Monty Python and the Holy Grail',
      description: '"Monty Python and the Holy Grail" is a 1975 British slapstick comedy that satirizes the legend of King Arthur and his quest to find the Holy Grail. Directed by Terry Gilliam and Terry Jones, the film follows King Arthur and his band of eccentric knights on a hilariously absurd journey filled with surreal humor, unconventional storytelling, and memorable one-liners. The movie blends historical parody with clever wit and remains a cult classic celebrated for its inventive comedic style and enduring influence on pop culture.',
      posterURL: 'https://www.movieposters.com/cdn/shop/products/montypythonholygrain.styleB.mp_480x.progressive.jpg?v=1647538695',
      rating: 8.2,
      type: 'Comedy',
      trailerlink :'https://www.youtube.com/embed/urRkGvhXc8w?si=5-Sdp3o78BsJZHm9'
    },
    {
      title: 'Dumb and Dumber',
      description: '"Dumb and Dumber" is a 1994 American comedy classic directed by Peter Farrelly, starring Jim Carrey and Jeff Daniels. The film follows Lloyd Christmas and Harry Dunne, two well-meaning but incredibly dim-witted friends, as they embark on a cross-country road trip. Their misadventures begin when they decide to return a lost briefcase to its owner, believing it might win the heart of the woman one of them adores. Filled with outrageous humor, slapstick comedy, and unforgettable one-liners, the movie has become a beloved cult favorite, celebrated for its quirky charm and over-the-top antics.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8LGlJdZiHq_OMOYYuSj3122FdjUIJQzWT6u9r-7KD9YreZ57cYJwspdY1bseFES_hRk&usqp=CAU',
      rating: 7.3,
      type: 'Comedy',
      trailerlink :'https://www.youtube.com/embed/l13yPhimE3o?si=7wCWZENRPkRO90Hg'
    },
  ],
  Romantic: [
    {
      title: 'The Notebook',
      description: 'The Notebook is a 2004 romantic drama directed by Nick Cassavetes and based on Nicholas Sparks, best-selling novel. The film follows the passionate and enduring love story of Noah Calhoun and Allie Hamilton, two young lovers from different social backgrounds who fall deeply in love during a summer in the early 1940s. Despite the challenges posed by family disapproval, World War II, and the passage of time, their connection remains unbreakable. Framed by an elderly man reading their story from a notebook to a fellow nursing home resident, the film explores themes of memory, sacrifice, and the timeless nature of true love..',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 7.8,
      type: 'Romantic',
      trailerlink :'https://www.youtube.com/embed/yDJIcYE32NU?si=ZEn1GepDOLFj6fR0'
    },
    {
      title: 'La La Land',
      description: 'La La Land is a 2016 American musical romantic comedy-drama film written and directed by Damien Chazelle. Starring Ryan Gosling as Sebastian, a passionate jazz pianist, and Emma Stone as Mia, an aspiring actress, the film follows their intertwined lives as they chase their dreams in the bustling city of Los Angeles. While their careers begin to take off, they confront the challenges of balancing love and ambition, ultimately questioning whether the pursuit of personal success can coexist with a fulfilling relationship.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg',
      rating: 8.0,
      type: 'Romantic',
      trailerlink :'https://www.youtube.com/embed/0pdqf4P9MB8?si=WSGOCenU3jnwi_Pl'
    },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      description: '"Eternal Sunshine of the Spotless Mind" is a thought-provoking sci-fi romance directed by Michel Gondry and written by Charlie Kaufman. The film follows Joel (Jim Carrey) and Clementine (Kate Winslet), two individuals who, after a painful breakup, decide to erase all memories of each other from their minds. As the procedure unfolds, Joel realizes that he still loves Clementine, leading him on a surreal, emotional journey through his own memories. The film explores themes of love, loss, and the bittersweet nature of human connection, challenging the idea of whether erasing painful memories can truly lead to healing.',
      posterURL: 'https://m.media-amazon.com/images/I/71G7AybM3qL.jpg',
      rating: 8.3,
      type: 'Romantic',
      trailerlink :'https://www.youtube.com/embed/GBEke6JixyE?si=wOHIJtvalHqmWZL7'
    },
    {
      title: 'Before Sunrise',
      description: 'Before Sunrise is a 1995 romantic drama directed by Richard Linklater. The film follows Jesse (Ethan Hawke), an American, and Céline (Julie Delpy), a French woman, who meet by chance on a train traveling through Europe. Captivated by one another, they decide to spend one night together in Vienna before Jesse must catch his flight back home the next morning. Over the course of the evening, they engage in deep, philosophical conversations about life, love, and the fleeting nature of time, forging an intimate connection that resonates with authenticity and vulnerability.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.1,
      type: 'Romantic',
      trailerlink :'https://www.youtube.com/embed/6MUcuqbGTxc?si=P8b_sb05PZLkazYN'
    },
    {
      title: 'Crazy, Stupid, Love',
      description: '"Crazy, Stupid, Love" is a 2011 American romantic comedy that weaves multiple storylines around love, relationships, and the ups and downs of modern romance. The film follows Cal Weaver (Steve Carell), a middle-aged man whose life takes an unexpected turn when his wife (Julianne Moore) asks for a divorce. As Cal navigates singlehood for the first time in decades, he meets Jacob Palmer (Ryan Gosling), a suave and charismatic ladies, man who takes him under his wing to teach him the art of seduction. Along the way, both men learn valuable lessons about love, commitment, and self-discovery, while their intertwined lives reveal that the journey to find love can be as unpredictable and humorous as it is heartwarming.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_FMjpg_UX1000_.jpg',
      rating: 7.4,
      type: 'Romantic',
      trailerlink :'https://www.youtube.com/embed/8iCwtxJejik?si=yXFN5HIicGj5hij1'
    },
  ],
  Action: [
    {
      title: 'Die Hard',
      description: 'Die Hard (1988) is an action thriller directed by John McTiernan and starring Bruce Willis as NYPD detective John McClane. While visiting his estranged wife at a Christmas party in Los Angeles, McClane finds himself trapped in a high-rise building taken over by a group of terrorists led by the ruthless Hans Gruber (played by Alan Rickman). Armed with only his wits and a handgun, McClane must outmaneuver the heavily armed criminals and save the hostages, including his wife.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5Zr6L42Hpep5FmWMyq92Elonifz4e0-7UHPOuK3KIOCR0ycy3eOfO6kHA7XJDjbpj3o&usqp=CAU',
      rating: 8.2,
      type:'Action',
      trailerlink :'https://www.youtube.com/embed/jaJuwKCmJbY?si=cO7QoUNqny3w-lP9'
    },
    {
      title: 'Mad Max: Fury Road',
      description: 'Mad Max: Fury Road (2015) is a high-octane, post-apocalyptic action film directed by George Miller. Set in a desolate wasteland where resources are scarce, the story follows Max Rockatansky (Tom Hardy), a lone drifter haunted by his past. He unwillingly joins forces with Imperator Furiosa (Charlize Theron), a fierce warrior on a mission to rescue a group of enslaved women from the tyrannical warlord Immortan Joe. As they flee across the desert in a relentless, high-speed chase, they must battle an army of war rigs and ruthless war boys in a visually stunning, adrenaline-fueled fight for survival.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.1,
      type:'Action',
      trailerlink :'https://www.youtube.com/embed/hEJnMQG9ev8?si=PsewwvcENi2TmBuK'
    },
    {
      title: 'The Dark Knight',
      description: 'The Dark Knight (2008) is a critically acclaimed superhero film directed by Christopher Nolan. Serving as the second installment in The Dark Knight Trilogy, the movie follows Batman (Christian Bale) as he faces his most formidable adversary yet—the Joker (Heath Ledger). The Joker, a sadistic criminal mastermind, wreaks havoc on Gotham City, pushing Batman, District Attorney Harvey Dent (Aaron Eckhart), and Commissioner Gordon (Gary Oldman) to their moral and ethical limits. As chaos unfolds, the Jokers unpredictable nature forces Gotham’s heroes to make devastating choices.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
      rating: 9.0,
      type:'Action',
      trailerlink :'https://www.youtube.com/embed/EXeTwQWrcwY?si=TXj9Di_5axbT2fvk'
    },
    {
      title: 'John Wick',
      description: '"John Wick" is a 2014 American action thriller directed by Chad Stahelski and written by Derek Kolstad. The film stars Keanu Reeves as the titular character, a retired hitman mourning the recent loss of his wife, Helen. His life takes a brutal turn when a group of Russian gangsters, led by Iosef Tarasov (Alfie Allen), break into his home, steal his cherished 1969 Ford Mustang, and kill his puppy, Daisy—a final gift from his late wife. This act of violence propels John back into the criminal underworld he had left behind, seeking vengeance against Iosef and his father, crime lord Viggo Tarasov (Michael Nyqvist).',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg',
      rating: 7.4,
      type:'Action',
      trailerlink :'https://www.youtube.com/embed/C0BMx-qxsP4?si=9lETP9gdS7NxhGCx'
    },
    {
      title: 'Mission: Impossible - Fallout',
      description: 'Mission: Impossible - Fallout (2018) is the sixth installment in the Mission: Impossible franchise, directed by Christopher McQuarrie and starring Tom Cruise as Ethan Hunt. The film follows Hunt and his IMF team as they race against time after a mission gone wrong. When a dangerous nuclear weapons syndicate, the Apostles, threatens global destruction, Ethan must team up with CIA agent August Walker (Henry Cavill) to prevent catastrophe. The action-packed thriller features breathtaking stunts, intense chase sequences, and high-stakes espionage, making it one of the most acclaimed films in the series.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_FMjpg_UX1000_.jpg',
      rating: 7.7,
      type:'Action',
      trailerlink :'https://www.youtube.com/embed/XiHiW4N7-bo?si=B9l78AIdTpa_XIoa'
    },
  ],
  Anime: [
    {
      title: 'Spirited Away',
      description: 'Spirited Away (2001) is a critically acclaimed Japanese animated fantasy film directed by Hayao Miyazaki and produced by Studio Ghibli. The film follows Chihiro, a 10-year-old girl who, while moving to a new home with her parents, stumbles upon a mysterious, abandoned amusement park. As night falls, the park reveals itself to be a magical realm ruled by the witch Yubaba, where spirits and strange creatures roam.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.6,
      type:'Anime',
      trailerlink :'https://www.youtube.com/embed/fDUFP7EeXLE?si=OA6cLylddk65KnjC'
    },
    {
      title: 'Your Name',
      description: '"Your Name" (Kimi no Na wa) is a critically acclaimed Japanese animated film directed by Makoto Shinkai. The story follows two teenagers, Taki Tachibana, a high school boy from Tokyo, and Mitsuha Miyamizu, a girl from a rural town, who mysteriously begin to swap bodies. As they live each other’s lives, they form a deep connection, communicating through notes and phone messages. However, when the body-swapping suddenly stops, Taki embarks on a journey to uncover the truth behind their connection, leading to a breathtaking and emotional revelation.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTIyNzFjNzItZmQ1MC00NzhjLThmMzYtZjRhN2Y3MmM2OGQyXkEyXkFqcGc@._V1_.jpg',
      rating: 8.4,
      type:'Anime',
      trailerlink :'https://www.youtube.com/embed/xU47nhruN-Q?si=0EfzYOqLHHQzZH3O'
    },
    {
      title: 'Akira',
      description: 'Akira is a groundbreaking 1988 Japanese cyberpunk anime film directed by Katsuhiro Otomo, based on his manga of the same name. Set in the dystopian metropolis of Neo-Tokyo in the year 2019, the story follows Kaneda, a rebellious biker gang leader, and his childhood friend Tetsuo, who gains destructive psychic abilities after a secret military experiment. As Tetsuos powers spiral out of control, he becomes a threat to the city, leading Kaneda on a desperate mission to stop him. The film explores themes of power, corruption, and the consequences of unchecked scientific experimentation.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BM2NiMTIzZWEtM2Y2ZS00NTg1LTlhZTgtOThjMTkwNzQ4NzBlXkEyXkFqcGc@._V1_.jpg',
      rating: 8.0,
      type:'Anime',
      trailerlink :'https://www.youtube.com/embed/nA8KmHC2Z-g?si=RLeF-5A99NTzEKta'
    },
    {
      title: 'Ghost in the Shell',
      description: '"Ghost in the Shell" is a groundbreaking 1995 cyberpunk anime film directed by Mamoru Oshii, based on Masamune Shirows manga of the same name. Set in a futuristic world where humans can augment themselves with cybernetic enhancements, the film follows Major Motoko Kusanagi, a highly skilled cyborg officer of Section 9, an elite counter-cyberterrorism unit.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYzllNGRjYTctY2Q2MS00M2Y3LWE5ZTktODc5ZmMwODE5OTVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.0,
      type:'Anime',
      trailerlink :'https://www.youtube.com/embed/8RF09G8Ymqg?si=5m9s8JtkxGUxIYDa'
    },
    {
      title: 'Princess Mononoke',
      description: 'Princess Mononoke (1997) is a Japanese animated fantasy film written and directed by Hayao Miyazaki and produced by Studio Ghibli. Set in Japan’s late Muromachi period, the story follows Ashitaka, a young prince who is cursed by a demon while protecting his village. Seeking a cure, he travels west and discovers a war between the forest spirits and an industrial settlement called Irontown. There, he meets San, a fierce warrior raised by wolves, known as Princess Mononoke.',
      posterURL: 'https://m.media-amazon.com/images/I/81Xh5jukUkL.jpg',
      rating: 8.4,
      type:'Anime',
      trailerlink :'https://www.youtube.com/embed/4OiMOHRDs14?si=D66IkNzwRcLoLvKB'
    },
  ],
  'Disturbing and Mystery': [
    {
      title: 'Se7en',
      description: 'Se7en is a psychological crime thriller directed by David Fincher and starring Brad Pitt, Morgan Freeman, and Kevin Spacey. The film follows two detectives, Somerset (Freeman) and Mills (Pitt), as they investigate a series of gruesome murders. The killer, known as "John Doe" (played by Spacey), chooses his victims based on the seven deadly sins: gluttony, greed, sloth, wrath, envy, pride, and lust. As the detectives get closer to uncovering the identity of the killer, they find themselves pulled into a chilling game of cat and mouse. The films dark tone and shocking conclusion make it one of the most iconic thrillers in modern cinema..',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.6,
      type:'Disturbing and Mystery',
      trailerlink :'https://www.youtube.com/embed/KPOuJGkpblk?si=lmedEFppJOJG3Oo-'
    },
    {
      title: 'The Silence of the Lambs',
      description: 'The Silence of the Lambs (1991) is a psychological horror thriller directed by Jonathan Demme. The film follows FBI trainee Clarice Starling (Jodie Foster) as she seeks the help of incarcerated cannibalistic serial killer Dr. Hannibal Lecter (Anthony Hopkins) to catch another serial killer, Buffalo Bill (Ted Levine), who is abducting and murdering women. As Starling gains Lecters trust, he provides cryptic clues, leading her closer to finding the killer. The tense, suspenseful film explores themes of psychology, manipulation, and the battle between good and evil, while delivering iconic performances by Hopkins and Foster.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg',
      rating: 8.6,
      type:'Disturbing and Mystery',
      trailerlink :'https://www.youtube.com/embed/RuX2MQeb8UM?si=Q6hgSekNaS9Gtfe6'
    },
    {
      title: 'Memento',
      description: '"Memento" is a 2000 American neo-noir psychological thriller directed by Christopher Nolan, featuring Guy Pearce, Carrie-Anne Moss, and Joe Pantoliano. The film follows Leonard Shelby (Pearce), a man suffering from anterograde amnesia, which impairs his ability to form new memories. To cope, Leonard uses Polaroid photographs, notes, and tattoos to track information as he seeks vengeance for his wifes murder. The narrative unfolds through two interwoven timelines: one in black-and-white presented chronologically, and another in color shown in reverse order, converging at the films conclusion.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Memento_poster.jpg/220px-Memento_poster.jpg',
      rating: 8.4,
      type:'Disturbing and Mystery',
      trailerlink :'https://www.youtube.com/embed/4CV41hoyS8A?si=5paNdPMspYivnwfA'
    },
    {
      title: 'Shutter Island',
      description: 'Shutter Island is a psychological thriller directed by Martin Scorsese, based on Dennis Lehanes novel of the same name. The film stars Leonardo DiCaprio as Teddy Daniels, a U.S. Marshal who is sent to a remote mental institution on Shutter Island to investigate the disappearance of a patient named Rachel Solando. As Teddy delves deeper into the mystery, he begins to question his own sanity and the truth behind the events unfolding on the island. The film is filled with suspense, twists, and a haunting atmosphere, as Teddy uncovers shocking secrets about the island and his own past.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.2,
      type:'Disturbing and Mystery',
      trailerlink :'https://www.youtube.com/embed/v8yrZSkKxTA?si=dTcdxzhPBvgTVKB1'
    },
    {
      title: 'Gone Girl',
      description: 'Gone Girl is a psychological thriller film directed by David Fincher and based on the bestselling novel by Gillian Flynn. The movie centers around the mysterious disappearance of Amy Dunne (Rosamund Pike), a woman who goes missing on the day of her fifth wedding anniversary. Her husband, Nick Dunne (Ben Affleck), becomes the prime suspect in her disappearance as the investigation uncovers shocking secrets about their troubled marriage. The film delves into themes of deception, media manipulation, and the complex dynamics between the couple. With unexpected twists and dark, suspenseful moments, Gone Girl keeps audiences on the edge of their seats until its gripping conclusion.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_FMjpg_UX1000_.jpg',
      rating: 8.1,
      type:'Disturbing and Mystery',
      trailerlink :'https://www.youtube.com/embed/cKYibT5J87w?si=5Ty2RgtIvXivPGiU'
    },
  ],
  Historical: [
    {
      title: 'Schindler\'s List',
      description: '"Schindlers List" is a 1993 historical drama directed by Steven Spielberg. Based on the true story of Oskar Schindler, a German businessman who saved over 1,100 Polish Jews during the Holocaust, the film is widely regarded as one of the greatest films ever made. Schindler, initially motivated by profit, gradually becomes deeply affected by the suffering of the Jewish people and risks his fortune and safety to save them from the horrors of the Nazi concentration camps. The movie is known for its stark portrayal of the brutality of the Holocaust, with much of it shot in black and white to emphasize the grim reality of the era.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.9,
      type:'Historical',
      trailerlink :'https://www.youtube.com/embed/mxphAlJID9U?si=kiduS8Idy5gLcuSJ'
    },
    {
      title: 'Gladiator',
      description: '"Gladiator" is a 2000 historical epic directed by Ridley Scott, featuring Russell Crowe as Maximus Decimus Meridius, a Roman general who becomes a gladiator to avenge his familys murder by the corrupt emperor Commodus (Joaquin Phoenix). The film explores themes of honor, betrayal, and the quest for justice in ancient Rome. It received critical acclaim, winning five Academy Awards, including Best Picture and Best Actor for Crowe.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg',
      rating: 8.5,
      type:'Historical',
      trailerlink :'https://www.youtube.com/embed/P5ieIbInFpg?si=5m_UfTdNBmSvNUqT'
    },
    {
      title: 'Lincoln',
      description: '"Lincoln" (2012) is a historical drama film directed by Steven Spielberg, based on the biography Team of Rivals: The Political Genius of Abraham Lincoln by Doris Kearns Goodwin. The film stars Daniel Day-Lewis as Abraham Lincoln, with Sally Field, Tommy Lee Jones, and Joseph Gordon-Levitt in supporting roles, Set during the final months of the American Civil War, the movie focuses on Lincoln, The film emphasizes Lincolns leadership, compassion, and political strategy, particularly his interactions with his cabinet, his efforts to secure the passage of the amendment, and his management of the pressures from both the Union and Confederate sides.s efforts to pass the 13th Amendment to the United States Constitution, which would abolish slavery. As the country is torn apart by war',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Lincoln_2012_Teaser_Poster.jpg',
      rating: 7.4,
      type:'Historical',
      trailerlink :'https://www.youtube.com/embed/KJVuqYkI2jQ?si=37RBJ0eg-3LqRArT'
    },
    {
      title: 'Braveheart',
      description: '"Braveheart" is a 1995 American epic historical drama directed by and starring Mel Gibson. The film portrays the life of William Wallace, a 13th-century Scottish warrior who leads a rebellion against English oppression. After witnessing the brutal execution of his father and brother by English forces, Wallace returns to his homeland to find it under the tyrannical rule of King Edward I. He secretly marries his childhood love, Murron, but she is later executed by the English, prompting Wallace to rally the Scottish people in a fight for freedom. The film is renowned for its intense battle sequences and its depiction of Wallaces unwavering quest for Scottish independence.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.3,
      type:'Historical',
      trailerlink :'https://www.youtube.com/embed/nMft5QDOHek?si=JkhUR2MsY-YdPF9t'
    },
    {
      title: 'The King\'s Speech',
      description: 'The Kings Speech (2010) is a historical drama film directed by Tom Hooper. The movie tells the inspiring true story of King George VI, who unexpectedly becomes the King of the United Kingdom after his brother abdicates the throne. Struggling with a severe stammer, King George VI (played by Colin Firth) enlists the help of an unorthodox speech therapist, Lionel Logue (played by Geoffrey Rush).',
      posterURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327941516i/9755737.jpg',
      rating: 8.0,
      type:'Historical',
      trailerlink :'https://www.youtube.com/embed/EcxBrTvLbBM?si=QxTcPpFsofXNZJC-'
    },
  ],
};

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({ title: '', rating: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleFilter = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filterMovies = (movies) => {
    return movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        (filters.rating === '' || movie.rating >= parseFloat(filters.rating))
      );
    });
  };

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => {
      const updatedMovies = { ...prevMovies };
      updatedMovies[newMovie.type].push(newMovie);
      return updatedMovies;
    });
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Filter onFilter={handleFilter} />
            <button onClick={openModal}>Add a movie</button>
        <AddMovie isOpen={isModalOpen} onRequestClose={closeModal} onAddMovie={addMovie} />
        <Routes>
          <Route path="/" element={
            <>
              {Object.keys(movies).map((type) => (
                <div key={type}>
                  <h2>{type}</h2>
                  <MovieList movies={filterMovies(movies[type])} />
                </div>
              ))}
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetails movies={Object.values(movies).flat()} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;

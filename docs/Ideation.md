# Numismatics Project

> coin identification and sorting service

## How it Works

There are many options for how this could be monitized. 

1. Sorting & Identification as a Service.
2. Identification App
3. Sell ML Model on AWS Marketplace
4. Ecommerce 
- Take the role of a coin dealer (take premium)
- Sell Collectables (take premium)
- Merch
5. Sell entire Business (https://empireflippers.com/)
6. Blog on Coin Collecting / Stacking
7. Subscription (Sort all you want w/ caps)
8. Sell access to coin data API

## Business Components

- AWS Sagemaker Coin Identifier
- App
- Website
- API

## Value Prop(s)

- With the advanced coin identification models and innovative sorting - we can process your job more efficiently than anyone else.
- Have a bunch of coins?  Not sure what to do with them?  How about seeing if you have any valuable coins while turning your coins into cash.
- Want to turn your coin jar into cash?  Let us help you maximize the value so you don't miss out!
- Did you know some coins are silver and are worth 14X their face value? Let us help you clean out your junk drawer while maximizing your return.
- Most coin sorting services can see if your coin cointains silver by weighing it - we take this to the next level.  Not only do we take into account weight - but we also take into account year and quality (estimated pcgs grade)

## User Journey

Start:
- Marketing Website
    - Landing Page (Public)
    - Show how it works (check it out for youself in the app)

Start:
- Identification App (free)
    - identify coins and advertize sorting service
    - redirect users to sorting service

## Competition

- Coin Stores
- Online Coin Graders (PCGS)

## Challenges

- Shipping large amounts of coins would be pretty expensive and heavy.  Would need to bake the cost of shipping into the process
- without a mechanical process it will be tough to keep up with the volume of coins if there is a lot
- what api's exist for this?
    - how do I get lots of images of coins for training
    - how do I get data on a given coin?  would I need to scrape some website to do this?
- Looks like Apple has a Vision library - and AWS uses Deep Lens for Real time Object Detection

## Limiting Scope

- US only
- Focus on the model not commerce - work with local people to test out the system (and hopefully gain new clients)
- no website initially - create the app client first so you can show that off to people
- initially only identify 1 coin at a time and prioritize the coin properties (year, quality) before distinguishing coins between one another.
    - once one coin is working well; then maybe it makes sense to roll coins out one and a time
- Only one environment initially

## ML Tasks

Detection:
- Identify the coins in the image
Classification:
- What coin is this? (Coin Identification)
- Is this the front of the back of the coin?
- What is the year was this coin minted?
- What is the estimated grade of this coin?

## 3rd party Services

- Github
- AWS
    - Sagemaker (ML)
    - Might Potentially use AWS DeepLens ($350)
    - Rekognition
    - SES (email)
    - Cognito (authentication)
- Stripe


## Web Scraping Task

- Scrape APMEX.com or pull data out of red book to get information on coins

## API Functions

#### Public

- Get Details for a given coin

#### MVP Private

- Get a user's orders
- Get a user's profile
- create a subscription
- cancel a subscription
- update a subscription
- create a single order

## Domains

## Resources

- https://storage.googleapis.com/openimages/web/visualizer/index.html?set=train&type=segmentation&r=false&c=%2Fm%2F0242l
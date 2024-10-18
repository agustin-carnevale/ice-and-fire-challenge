# Ice and Fire Challenge

## Task

An Interface of Ice and Fire

"As an avid fan of the epic series A Song of Ice and Fire, I have a hard time keeping up with all of the characters who lose their heads. As such, I would like to have an application that can help me track which characters from the series are alive or dead."

Uses https://anapioficeandfire.com/ as a data source
Is built using your tech stack of choice
Note: the customer is looking for people with Next.js experience, especially using the App Router, but you are free to use any technology you’d like.

The Houses resource from the API (https://anapioficeandfire.com/api/houses) is paginated by default to 10 results, for these 10 houses please display a list of all of their Sworn Members grouped by house.

For each Sworn Member display their full name and whether they are alive or dead.

If a character is dead, please display the information provided by the API about their death.
If a house has no Sworn Members, please display the message "This house has no sworn members".

You are welcome to use tools like ChatGPT if that is a part of your daily workflow but please be prepared to defend your choice to use those tools and provide alternate methods if requested on review

You may have other ideas of how you could elaborate this project. If you have time available you are welcome to add those as well, but realize that any bugs in additional features may count against you as much as the added features count for you. You should focus on quality more than quantity.

## Running the project locally

First, clone the repository to your local machine.

Then run:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes and considerations

### Framework and technology

I decided to use Nextjs v14 as suggested. Is a really powerful framework which optimizes a lot of things, uses RSC, gives you stuff like caching out-of-the-box, and is a good choice for both static and more dynamic content.

### Data Fetching and Pagination

Of course, working with big amounts of data, requires you to handle pagination. This was pretty straightforward, as the API "AnApiOfIceAndFire" provides pagination data through the Link Header. And I just made use of the pageParams and the Pagination components from Shadcn to implement the functionality.

I also used the native fetch function, which lets Nextjs handle all the caching for you by default.

### UI and Styling

I decided to use Tailwindcss combined with Shadcn which is a really good mix, because you can have all the benefits and flexibility of using Tailwind, and also develop fast using all the components you need from shadcn. That being said, I didn't pay too much attention to design or details, just the minimum required styling to show data in a decent way.

### Error handling

I didn't do much in regards to handling error in a good and smooth way, but I at least added the `app/error.tsx` that acts as an Error Boundary and it will catch any errors and show you a nice error page in the client side.

### Next steps

There is a lot you can do to continue this project, like improving the design and styling, adding more pages, for example, detail pages for the Character or even the House, displaying more data. You could even add more functionality like, search for houses, search for characters, filters, etc. Better error handling and messages. Maybe some unit testing.

/*Back-end logic for blog*/

const express = require('express')
const blog = express()

const fs = require('fs')

/*Blog view by using pug*/
blog.set('view engine', 'pug')

/*Connection style and making it public for view*/
blog.use('/static', express.static('public'))
blog.use(express.urlencoded({ extended: false }))

blog.get('/', (req, res) => {
	res.render('home')
})


blog.get('/create', (req, res) => {
	res.render('create_page')
})

/*Logic for create_page*/
blog.post('/create', (req, res) => {
	const title = req.body.title
	const description = req.body.description_post

	if(title.trim() === '' && description.trim() === ''){
		res.render('create_page', { error: true })
	} else {
		fs.readFile('./data/posts.json', (err, data) =>{
			if (err) throw err

		const posts = JSON.parse(data)

		posts.push({
			id: id (),
			title: title,
			description: description
		})
		fs.writeFile('./data/posts.json', JSON.stringify(posts), err =>{
			if (err) throw err

			res.render('create_page', {success: true })
		})
	  })
	}

	res.render('create_page')
})



/*Logic for reading all posts*/
blog.get('/posts', (req, res) => {

	fs.readFile('./data/posts.json', (err, data) =>{
		if (err) throw err

		const posts = JSON.parse(data)
		res.render('posts', { posts: posts })
	})
})

blog.get('/posts/:id', (req, res) => {
	const id = req.params.id

	fs.readFile('./data/posts.json', (err, data) =>{
		if (err) throw err

		const posts = JSON.parse(data)

		const post = posts.filter(post => post.id == id)[0]

		res.render('detail', { post: post })
	})
})

/*Link to blog*/
blog.listen(3400, (err)=> {
	if (err) console.log(err)
	console.log('Server is running on 3400')
})

/*Random id for each posts after creation*/
function id () {
  return '_' + Math.random().toString(36).substr(2, 9);
}
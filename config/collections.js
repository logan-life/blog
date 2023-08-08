const slugify = require('slugify')

/* Creating a collection containing all blogposts by filtering based on folder and filetype */
const getAllPosts = (collectionApi) => {
  return collectionApi.getFilteredByGlob('./src/blog/*.md')
}

const getAllTILs = (collectionApi) => {
  return collectionApi.getFilteredByGlob('./src/til/*.md')

}

const getCategoryList = (collectionApi) => {
  const catPages = []
  let categories = []
  const blogPosts = collectionApi.getFilteredByGlob('./src/blog/*.md')

  blogPosts.map((item) => {
    categories.push(item.data.category)
  })

  categories = categories.sort(sortAlphabetically)
  const temp = [...new Set(categories)]

  temp.forEach((category) => {
    const slug = strToSlug(category);

    if(slug !== 'in-the-spotlight') {
      catPages.push({
        'key': slug,
        'name': category 
      })
    }
  })

  return catPages
}

const getTopicList = (collectionApi) => {
  const topicPages = []
  let topics = []
  const TILs = collectionApi.getFilteredByGlob('./src/til/*.md')

  TILs.map((item) => {
    topics.push(item.data.topic)
  })

  topics = topics.sort(sortAlphabetically)
  const temp = [...new Set(topics)]

  temp.forEach((topic) => {
    const slug = strToSlug(topic);

    if(slug !== 'in-the-spotlight') {
      topicPages.push({
        'key': slug,
        'name': topic
      })
    }
  })

  return topicPages
}

const getCategorisedPosts = (collectionApi) => {
  const categorisedPosts = {}

  collectionApi.getFilteredByGlob('./src/blog/*.md').forEach(item => {
    const category = item.data.category
      
    // Ignore the ones without a category
    if (typeof category !== 'string')
    return

    const slug = strToSlug(category)

    if (Array.isArray(categorisedPosts[slug])) {
      categorisedPosts[slug].push(item)
    } else {
      categorisedPosts[slug] = [item]
    }
  })

  return categorisedPosts
}

const getTopifiedTILs = (collectionApi) => {
  const topifiedTILs = {}
  
  collectionApi.getFilteredByGlob('./src/til/*.md').forEach(item => {
    const topic = item.data.topic

    // Ignore the ones without a topic
    if (typeof topic !== 'string')
    return

    const slug = strToSlug(topic)

    if (Array.isArray(topifiedTILs[slug])) {
      topifiedTILs[slug].push(item)
    } else {
      topifiedTILs[slug] = [item]
    }
  })

  return topifiedTILs
}

module.exports = {
  getAllPosts,
  getAllTILs,
  getCategoryList,
  getTopicList,
  getCategorisedPosts,
  getTopifiedTILs
}


function strToSlug(str) {
  const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true,
  }
  
  return slugify(str, options)
}


function sortAlphabetically(a, b) {
  return a.localeCompare(b, "en", { sensitivity: "base" })
}
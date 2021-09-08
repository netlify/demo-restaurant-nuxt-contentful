const fs = require('fs');
const chalk = require('chalk');

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_API_TOKEN,
});


const fetchEntries = async () => {
  const entries = await client.getEntries();
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
  return {};
}


module.exports = {

  async onPreBuild({ inputs, utils }) {

    try {

      const data = await fetchEntries();
      console.log(`data`, data);
               
      // save the data to the specified file
      await fs.writeFileSync(`${inputs.dataFilePath}/menu.json`, JSON.stringify(data));
      console.log('Fetched and stashed:', chalk.green(`=> ${inputs.dataFilePath}/menu.json`));
      
    }
    catch(err) {
      // use the specified failure behaviour
      if (inputs.fail == 'failPlugin') {
        utils.build.failPlugin(`Error fetching data: ${err}`);
      } else {
        utils.build.failBuild(`Error fetching data: ${err}`);
      }
    }
  }
};
import requests
import json

custom_agent = {
    'User-Agent': 'some-agent',
    'From': 'name@domain.com' 
}

def query_category_items():
    result = query_category_items_callback({'generator': 'allcategories'})
    days_file = open("dump2.json",'w')
    days_file.write(json.dump(result))
    days_file.close()

def query_category_items_callback(parameters):
    parameters['action'] = 'query'
    parameters['format'] = 'json'
    parameters['list'] = 'allcategories'
    parameters['aclimit'] = '500'
    lastContinue = {}
    while True:
        # Clone original parameters
        parameters_copy = parameters.copy()
        # Modify the original parameters
        # Insert values returned in the 'continue' section
        parameters_copy.update(lastContinue)
        # Call API
        result = requests.get('https://oldschool.runescape.wiki/api.php', 
                              headers=custom_agent, 
                              params=parameters_copy).json()
        if 'error' in result:
            print(">>> ERROR!")
            break
        if 'warnings' in result:
            print(result['warnings'])
        if 'query' in result:
            yield result['query']
        if 'continue' not in result:
            break
        lastContinue = result['continue']

if __name__=="__main__":   
    # The main method, call the query method   
    query_category_items()
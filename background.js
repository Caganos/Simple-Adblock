chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    {
      "id": 1,
      "priority": 1,
      "action": { "type": "block" },
      "condition": { "urlFilter": "*doubleclick.net*", "resourceTypes": ["script", "image", "xmlhttprequest"] }
    },
    {
      "id": 2,
      "priority": 1,
      "action": { "type": "block" },
      "condition": { "urlFilter": "*youtube.com/get_video_info?*", "resourceTypes": ["xmlhttprequest"] }
    },
    {
      "id": 3,
      "priority": 1,
      "action": { "type": "block" },
      "condition": { "urlFilter": "*youtube.com/api/stats/ads*", "resourceTypes": ["xmlhttprequest"] }
    },
    {
      "id": 4,
      "priority": 1,
      "action": { "type": "block" },
      "condition": { "urlFilter": "*googlevideo.com/videoplayback?*adformat*", "resourceTypes": ["media"] }
    }
  ],
  removeRuleIds: [1, 2, 3, 4]
});

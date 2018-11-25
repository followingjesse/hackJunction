using System;
using System.Collections.Generic;

namespace BeaconBackend
{
    public class Articles
    {
        public int totalHits { get; set; }
        public List<Result> results { get; set; }
    }
    public class Category
    {
        public string id { get; set; }
        public string title { get; set; }
    }

    public class Result
    {
        public string headerImageUrl { get; set; }
        public string description { get; set; }
        public string originalUrl { get; set; }
        public string title { get; set; }
        public string body { get; set; }
        public DateTime createdAt { get; set; }
        public string ingress { get; set; }
        public int legacyId { get; set; }
        public string id { get; set; }
        public List<Category> categories { get; set; }
        public string themeSlug { get; set; }
        public string slug { get; set; }
        public DateTime updatedAt { get; set; }
        public string resourceType { get; set; }
        public string headerVideoUrl { get; set; }
    }
}
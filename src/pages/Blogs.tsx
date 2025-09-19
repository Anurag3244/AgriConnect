import React from "react";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  Heart,
  Eye,
  Share2,
  Filter,
  Search,
  Award,
  Bookmark
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Blogs = () => {
  const featuredStory = {
    title: "From Traditional to Digital: How Ramesh Kumar Transformed His 5-Acre Farm",
    excerpt: "A inspiring journey of a Bihar farmer who increased his income by 300% using AgriConnect schemes and modern farming techniques.",
    author: "Dr. Priya Sharma",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Success Story",
    image: "👨‍🌾",
    views: "12.5K",
    likes: "2.1K"
  };

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to PM-Kisan Yojana Registration in 2024",
      excerpt: "Step-by-step process to register for PM-Kisan scheme, required documents, and common issues faced by farmers.",
      author: "AgriConnect Team",
      date: "December 12, 2024",
      readTime: "5 min read",
      category: "Government Schemes",
      views: "8.2K",
      likes: "1.5K",
      image: "📋"
    },
    {
      id: 2,
      title: "Winter Crop Management: Best Practices for Rabi Season",
      excerpt: "Expert tips for managing wheat, barley, and other Rabi crops during winter months for maximum yield.",
      author: "Dr. Rajesh Gupta",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Crop Advisory",
      views: "6.8K",
      likes: "980",
      image: "🌾"
    },
    {
      id: 3,
      title: "How Organic Farming Doubled Meera Devi's Profits",
      excerpt: "Success story of a Maharashtra farmer who switched to organic farming and built a sustainable business.",
      author: "Rural Reporter",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Success Story",
      views: "9.5K",
      likes: "1.8K",
      image: "👩‍🌾"
    },
    {
      id: 4,
      title: "Understanding Soil Health Cards: Your Complete Guide",
      excerpt: "Everything you need to know about soil health cards, how to interpret results, and implement recommendations.",
      author: "Soil Health Team",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Soil Health",
      views: "7.1K",
      likes: "1.2K",
      image: "🧪"
    },
    {
      id: 5,
      title: "e-NAM Success: How Digital Marketing Increased Farm Income",
      excerpt: "Real stories of farmers who used e-NAM platform to get better prices for their produce.",
      author: "Market Expert",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Digital Marketing",
      views: "5.9K",
      likes: "890",
      image: "💰"
    },
    {
      id: 6,
      title: "Pest Management in Cotton: Integrated Approach",
      excerpt: "Comprehensive guide to managing common cotton pests using integrated pest management techniques.",
      author: "Dr. Suresh Patel",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "Pest Management",
      views: "4.7K",
      likes: "750",
      image: "🐛"
    }
  ];

  const categories = [
    "All Categories",
    "Success Stories",
    "Government Schemes", 
    "Crop Advisory",
    "Soil Health",
    "Pest Management",
    "Digital Marketing",
    "Technology"
  ];

  const popularTags = [
    "PM-Kisan", "Organic Farming", "e-NAM", "Soil Health", "Weather Advisory", 
    "Crop Insurance", "Success Stories", "Digital Agriculture"
  ];

  const stats = [
    { label: "Success Stories", value: "5,000+", icon: Users },
    { label: "Monthly Readers", value: "2.5M+", icon: Eye },
    { label: "Expert Articles", value: "1,200+", icon: BookOpen },
    { label: "Farmer Reviews", value: "4.8/5", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blogs & Success Stories
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from real farmer experiences, expert insights, and comprehensive guides 
            to grow your agricultural knowledge and success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-4">
                  <IconComponent className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Story */}
        <Card className="mb-12 shadow-hero border-0 bg-gradient-card overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  <Award className="w-3 h-3 mr-1" />
                  Featured Story
                </Badge>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredStory.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredStory.excerpt}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {featuredStory.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{featuredStory.author}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {featuredStory.date} • {featuredStory.readTime}
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>{featuredStory.views}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span>{featuredStory.likes}</span>
                  </div>
                </div>
                
                <Button size="lg" className="hover-lift">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-8xl mb-4">{featuredStory.image}</div>
                <Badge variant="outline" className="text-sm">
                  {featuredStory.category}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search articles, success stories, or farming topics..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button variant="outline">Most Popular</Button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover-lift shadow-card border-0 bg-gradient-card h-full cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{post.image}</div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1 text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                      <Heart className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <Button variant="outline" size="lg">
            Load More Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Popular Tags */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-xl">Popular Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-colors">
                  #{tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Signup */}
        <Card className="bg-primary text-primary-foreground shadow-hero">
          <CardContent className="p-8 text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Insights</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Get weekly digest of success stories, expert tips, and government scheme updates 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
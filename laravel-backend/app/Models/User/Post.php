<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'user_id',
        'status',
        'scheduled_at',
        'published_at'

    ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

}
